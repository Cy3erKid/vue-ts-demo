import User from "@/types/User";
import axios from "axios";
import { toRefs, reactive } from "vue";
const UserDataServiceDto = {
  async getAll() {
    const UserLists = reactive({ Users: {} as User });
    await axios
      .get(`api/users`)
      .then((result) => {
        UserLists.Users = result.data.users;
      })
      .catch((err) => {
        return err;
      });

    return { ...toRefs(UserLists) };
  },

  getById (id: number) {
    axios
      .get(`api/users/id/${id}`)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });
  },

  create(data: any) {
    axios
      .post(`api/users/create`, data)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });
  },

  update(id: number, data: any) {
    axios
      .put(`api/users/update/${id}`, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });
  },

  delete(id: number) {
    axios
      .delete(`api/users/delete/${id}`)
      .then((result) => {
        return result.data;
      })
      .catch((er) => {
        return er;
      });
  }
}

export default UserDataServiceDto;
