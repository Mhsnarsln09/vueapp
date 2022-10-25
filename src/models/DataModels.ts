export default class DataModels {
  appearance: Array<number>;
  better_call_saul_appearance: Array<unknown>;
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: Array<string>;
  portrayed: string;
  status: string;

  constructor() {
    this.appearance = [];
    this.better_call_saul_appearance = [];
    this.birthday = "";
    this.category = "";
    this.char_id = 0;
    this.img = "";
    this.name = "";
    this.nickname = "";
    this.occupation = [];
    this.portrayed = "";
    this.status = "";
  }
}
