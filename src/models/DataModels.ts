export default class DataModels {
  appearance: Array<number>;
  better_call_saul_appearance: Array<string> | null;
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: Array<string>;
  portrayed: string;
  status: string;
  quantity: number;
  constructor() {
    this.appearance = [];
    this.better_call_saul_appearance = null;
    this.birthday = "";
    this.category = "";
    this.char_id = 0;
    this.img = "";
    this.name = "";
    this.nickname = "";
    this.occupation = [];
    this.portrayed = "";
    this.status = "";
    this.quantity = 0;
  }
}
