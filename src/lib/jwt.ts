import { failure, type Result, success } from 'generic-result-type';
import * as jose from 'jose';

const base64Secret = process.env.JWT_SECRET_BASE64;
if (!base64Secret) {
  throw new Error('Environment variable JWT_SECRET_BASE64 not found');
}

const secret = Buffer.from(base64Secret, 'base64');
if (secret.length !== 32) {
  throw new Error('JWE_DIR_KEY_B64 must decode to 32 bytes');
}

const urn = 'urn:qcpetstudies.com:';
const issuer = `${urn}issuer`;
const audience = `${urn}audience`;

export const createJwt = async (payload: Record<string, unknown>): Promise<string> => {
  return await new jose.EncryptJWT(payload)
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime('60d')
    .encrypt(secret);
};

export const decodeJwt = async (jwt: string): Promise<Result<Record<string, unknown>>> => {
  try {
    const { payload } = await jose.jwtDecrypt<Record<string, unknown>>(jwt, secret, { issuer, audience });
    return success(payload);
  } catch (err) {
    if (err instanceof Error) {
      return failure(err);
    }
    return failure(Error('Unknown error'));
  }
};
