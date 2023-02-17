import { option } from '@models';

// libs
export function filterName(arrAll: Array<any>, arrOption: Array<any>) {
  let arr: any = [];
  arrAll?.map((item: any) => {
    arrOption?.map((option) => {
      if (item?.id === option) {
        return arr?.push(item?.name);
      }
    });
  });
  return arr;
}

export const mapOrder = (array: Array<any>, order: any, key: any) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));
  return array;
};

export const containsText = (item: any, searchText: string) => {
  return item.sn.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
};

export function formatPoint(point: number) {
  return point?.toLocaleString('en-US');
}

export const encodeCC = (dt: string, key1: string, token: string, key2: string, WIP_ID?: string) => {
  const get6LastCharacter = token.substr(token.length - 6);

  return WIP_ID ? `${dt}${key1}${get6LastCharacter}${WIP_ID}${key2}` : `${dt}${key1}${get6LastCharacter}${key2}`;
};

export const getRandomText = (texts: option[]) => {
  const randomIndex = Math.floor(Math.random() * texts.length);

  return texts[randomIndex]['label'];
};
