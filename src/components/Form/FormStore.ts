import { makeAutoObservable } from 'mobx';

class FormStore {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: undefined,
    telephoneNumber: '',
    address: '',
    gender: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  setFormData(data: any) {
    this.formData = data;
  }
}

export default FormStore;
