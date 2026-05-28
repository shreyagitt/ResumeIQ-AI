import API from "./api";


// GET CANDIDATES
export const getCandidates =
  async () => {

    const res =
      await API.get(
        "/recruiter/candidates",
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


// TOGGLE SHORTLIST
export const toggleShortlist =
  async (id) => {

    const res =
      await API.put(
        `/recruiter/shortlist/${id}`,
        {},
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