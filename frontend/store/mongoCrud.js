export const state = () => ({
  crudOperations: [
    { title: "Create Customer", path: "create" },
    { title: "Find Customer", path: "find-one" },
    { title: "Update a Customer", path: "update-one" },
    { title: "Delete a Customer", path: "delete-one" },
  ],
});

export const getters = {
  getCrudOperations: (state) => {
    return state.crudOperations;
  },
};
