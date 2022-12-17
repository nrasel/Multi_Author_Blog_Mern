import axios from "axios";

export const add_tag = (data) => async (dispatch) => {
  dispatch({
    type: "SET_LOADER_TAG",
  });
  try {
    const response = await axios.post("/rest-api/add-tag", data);
    dispatch({
      type: "TAG_ADD_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    console.log(error.response.data.errorMessage);
    dispatch({
      type: "TAG_ADD_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};

export const get_all_tag = (page, searchValue) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/rest-api/get-tag?page=${page}&&searchValue=${searchValue}`
    );

    dispatch({
      type: "DASHBOARD_TAG_GET_SUCCESS",
      payload: {
        allTag: response.data.allTag,
        perPage: response.data.perPage,
        tagCount: response.data.tagCount,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const delete_tag = (id) => async (dispatch) => {
  console.log(id);
  try {
    const response = await axios.delete(`/rest-api/delete-tag/${id}`);
    dispatch({
      type: "TAG_DELETE_SUCCESS_MESSAGE",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
