import API from "./api";


// GET ANALYSIS HISTORY
export const getAnalysisHistory =
  async () => {

    const res = await API.get(
      "/analysis/history",
      {
        headers: {
          Authorization:
            localStorage.getItem("token"),
        },
      }
    );

    return res.data;
};

// GET LATEST ANALYSIS
export const getLatestAnalysis =
  async () => {

    const res = await API.get(
      "/analysis/latest",
      {
        headers: {
          Authorization:
            localStorage.getItem(
              "token"
            ),
        },
      }
    );

    return res.data;
};