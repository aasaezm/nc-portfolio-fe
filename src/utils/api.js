import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-portfolio-app.herokuapp.com/api",
});

export const getVideos = (topic, sortBy, orderBy) => {
  return api.get(`/videos`).then(({ data: videos }) => videos);
};

export const patchVotesByVideoId = (vote, video_id) => {
  return api.patch(`/videos/${video_id}`, { vote: vote });
};

export const postCloudinary = (url, formData, tags) => {
  return fetch(url, {
    method: "post",
    body: formData,
  }).then((res) => res.json());
};

export const postVideoToDatabase = (returnData) => {
  const videoData = {};
  console.log(returnData);
  return videoApi.post("/videos", returnData).then(() => {});
};

export const signinUser = (username, password) => {
  return videoApi
    .post("/signin", { username, password })
    .then(({ data: { user } }) => {
      return user;
    });
};

export const GetCommentsByVideoId = (video_id) => {
  return api.get(`/comments/${video_id}`);
};
