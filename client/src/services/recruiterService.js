import API from "./api";


// GET CANDIDATES
export const getCandidates =
  async () => {

    const res =
      await API.get(
        "/api/recruiter/candidates",
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
        `/api/recruiter/shortlist/${id}`,
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