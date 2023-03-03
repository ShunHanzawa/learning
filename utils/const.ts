import tomatoesImage from '@/public/tomatoes.jpg';
import cakeImage from '@/public/cake.jpg';
import kitchenImage from '@/public/kitchen.jpg';
import tableImage from '@/public/table.jpg';

export const COLORS = {
  white: '#F4F4F4',
  darkWhite: '#BEBEBE',
  black: '#000000',
  blurBlack: '#252525',
  rightBlack: '#383128',
  darkGreen: '#5E594E',
  gray: '#D2D2D2',
  darkGray: '#A4A4A4'
};

export const FONT = {
  fontStyle: 'italic',
  fontFamily: 'serif',
  fontWeight: 500
};

export const FEATURE_CARDS = [
  {
    image: tomatoesImage,
    headLine: 'こだわりの食材',
    detail:
      '当店ではシェフが産地に赴き、実際に見聞きして厳選を重ねた食材を使用しています。当店ではシェフが産地に赴き、実際に見聞きして厳選を重ねた食材を使用しています。当店ではシェフが産地に赴き、実際に見聞きして厳選を重ねた食材を使用しています。当店ではシェフが産地に赴き、実際に見聞きして厳選を重ねた食材を使用しています。当店ではシェフが産地に赴き、実際に見聞きして厳選を重ねた食材を使用しています。'
  },
  {
    image: cakeImage,
    headLine: '食後にデザートをどうぞ',
    detail:
      '有名ホテルで培われた技術を駆使して素晴らしいデザートをご用意しています。有名ホテルで培われた技術を駆使して素晴らしいデザートをご用意しています。有名ホテルで培われた技術を駆使して素晴らしいデザートをご用意しています。有名ホテルで培われた技術を駆使して素晴らしいデザートをご用意しています。有名ホテルで培われた技術を駆使して素晴らしいデザートをご用意しています。'
  },
  {
    image: kitchenImage,
    headLine: '洗練された技術',
    detail:
      '現地イタリアへ修行した経験と、和食料理店で得た技術をマージした技術を駆使して当店でしか味わえない料理を振る舞います。現地イタリアへ修行した経験と、和食料理店で得た技術をマージした技術を駆使して当店でしか味わえない料理を振る舞います。現地イタリアへ修行した経験と、和食料理店で得た技術をマージした技術を駆使して当店でしか味わえない料理を振る舞います。'
  }
];

export const MENU_CARDS = [
  {
    image: tableImage,
    headLine: '季節ごとのメニュー',
    detail:
      '季節の食材を取り入れたメニューを月毎にご提供しています。季節の食材を取り入れたメニューを月毎にご提供しています。季節の食材を取り入れたメニューを月毎にご提供しています。季節の食材を取り入れたメニューを月毎にご提供しています。季節の食材を取り入れたメニューを月毎にご提供しています。季節の食材を取り入れたメニューを月毎にご提供しています。'
  }
];

export const STORE_INFORMATION = [
  {
    title: 'Address',
    detail: '東京都渋谷区代々木上原3-3-3-3-3-3-3'
  },
  {
    title: 'Tell',
    detail: '012-3456-7890'
  },
  {
    title: 'Opening Hours',
    detail: '11:00~15:00\n17:00~22:00'
  },
  {
    title: 'Regular Holiday',
    detail: '火曜・第2月曜'
  }
];
