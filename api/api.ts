import axios from 'axios';

export const fetchQuestionList = async (): Promise<any> => {
  try {
    const BASE_URL =
      'https://api.github.com/repos/kush11/JSInterviewGuide/contents/JSInterview';
    const accessToken = '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';
    const data = await axios.get(`${BASE_URL}`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: `token ${accessToken}`,
      },
    });
    return data.data;
  } catch (e) {
    throw new Error('FETCH Payments DATA');
  }
};

const api = {
  fetchQuestionList,
};

export default api;
