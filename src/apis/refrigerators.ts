import { instance } from "./instance";

export const postRefrigerators = async () => {
  try {
    const response = await instance.post("/refrigerators", {
      memberId: parseInt(localStorage.getItem("memberId") || ""),
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getRefrigerators = async () => {
  try {
    const response = await instance.get("/refrigerators", {
      data: {
        memberId: parseInt(localStorage.getItem("memberId") || ""),
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const deleteRefrigerators = async () => {
  try {
    const response = await instance.delete("/refrigerators", {
      data: {
        memberId: parseInt(localStorage.getItem("memberId") || ""),
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
