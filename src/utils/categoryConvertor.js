export const categoryConvertor = (category) => {
  switch (category) {
    case "MEALS":
      return "正餐";
      break;
    case "BAKERY":
      return "烘焙食品";
      break;
    case "GROCERY":
      return "商品、雜貨";
      break;
    case "OTHERS":
      return "其他";
      break;
  }
};
