import axios from 'axios';
import Config from 'react-native-config';
const accessToken = Config.accessToken;
export const fetchQuestionList = async (): Promise<any> => {
  try {
    const BASE_URL =
      'https://api.github.com/repos/kush11/JSInterviewGuide/contents/JSInterview';
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

export const fetchQuestionResource = async (
  questionPath: string,
): Promise<any> => {
  try {
    const BASE_URL = 'https://raw.githubusercontent.com';
    const data = await axios.get(
      `${BASE_URL}/kush11/JSInterviewGuide/master/JSInterview/${questionPath}`,
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          Authorization: `token ${accessToken}`,
        },
      },
    );
    return data.data;
  } catch (e) {
    throw new Error('FETCH Payments DATA');
  }
};

const api = {
  fetchQuestionList,
  fetchQuestionResource,
};

export default api;
