import * as HttpStatus from '@qccareerschool/http-status';
import { NextApiHandler } from 'next';
import { getEnrollment } from '../../lib/getEnrollment';

import { getPardotAccessToken, getProspectByEmail, setProspectAsStudent } from '../../lib/pardot-api';

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end();
    return;
  }

  try {
    if (typeof req.query.enrollmentId !== 'string' || typeof req.query.code !== 'string') {
      throw new HttpStatus.BadRequest();
    }

    const enrollmentId = parseInt(req.query.enrollmentId, 10);
    const code = req.query.code;

    const enrollment = await getEnrollment(enrollmentId, code);

    if (!enrollment.complete || !enrollment.success) {
      throw new HttpStatus.NotFound();
    }

    if (!enrollment.emailed) {
      // update the prospect's student status
      let token = await getPardotAccessToken();
      const { prospect } = await getProspectByEmail(enrollment.emailAddress, token.access_token);
      token = await getPardotAccessToken();
      await setProspectAsStudent(prospect.id, token.access_token);
    }
  } catch (err) {
    const internalServerError = 500;
    const errorCode = err instanceof HttpStatus.HttpResponse ? err.statusCode : internalServerError;
    res.statusCode = errorCode;
  }
  res.end();
};

export default handler;
