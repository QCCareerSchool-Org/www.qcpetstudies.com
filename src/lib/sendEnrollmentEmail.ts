export const sendEnrollmentEmail = async (enrollmentId: number, code: string): Promise<void> => {
  const url = `https://api.qccareerschool.com/enrollments/${enrollmentId}/email`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'X-API-Version': '2',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }
  await response.json();
};
