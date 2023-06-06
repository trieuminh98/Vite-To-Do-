import defaultImage4 from '~/assets/imgs/test_2.jpeg'
import defaultImage3 from '~/assets/imgs/test_3.jpeg'
import defaultImage2 from '~/assets/imgs/test_4.jpeg'
import defaultImage from '~/assets/imgs/test_5.jpeg'
import { SongInfo } from './types.type'

export const songInfos: SongInfo[] = [
  {
    id: 1,
    songName: 'Mùa Hè Năm Ấy',
    author: 'DREAMeR',
    publicDay: 'Hôm nay',
    album: 'Hẹn Gặp Anh (Single)',
    producer: 'Dư Quốc Vương',
    category: 'Vietnam, V-POP',
    provider: 'Believe',
    img: defaultImage
  },
  {
    id: 2,
    songName: 'Cầu Vòng Khuyết',
    author: 'CARA, Hoàng Duyên',
    publicDay: '2 ngày trước',
    album: 'Hẹn Gặp Anh (Single) 2',
    producer: 'Dư Quốc Vương 2',
    category: 'Vietnam, V-POP ',
    provider: 'Believe 2',
    img: defaultImage2
  },
  {
    id: 3,
    songName: 'Miễn Là Cùng Nhau',
    author: 'Sean, Minh Huy',
    publicDay: 'Hôm qua',
    album: 'Hẹn Gặp Anh (Single) 2',
    producer: 'Dư Quốc Vương 2',
    category: 'Vietnam, V-POP 2',
    provider: 'Believe 2',
    img: defaultImage3
  },
  ,
  {
    id: 4,
    songName: 'Đi Bao Xa (Da Bouncy)',
    author: 'Gill, RPT Orijinn, RZ Mas',
    publicDay: '2 ngày trước',
    album: 'Hẹn Gặp Anh (Single) 3',
    producer: 'Dư Quốc Vương 3',
    category: 'Vietnam, V-POP 3',
    provider: 'Believe 3',
    img: defaultImage4
  },
  {
    id: 5,
    songName: '20 25 30',
    author: 'Bảo Anh',
    publicDay: 'Hôm nay',
    album: 'Hẹn Gặp Anh (Single) 4',
    producer: 'Dư Quốc Vương 4',
    category: 'Vietnam, V-POP 4',
    provider: 'Believe 4',
    img: defaultImage
  },
  {
    id: 6,
    songName: 'Ai Cùng Có Một Mối Tình Buồn',
    author: 'Vicky Nhung',
    publicDay: '3 ngày trước',
    album: 'Hẹn Gặp Anh (Single) 5',
    producer: 'Dư Quốc Vương 5',
    category: 'Vietnam, V-POP 5',
    provider: 'Believe 5',
    img: defaultImage3
  }
] as SongInfo[]
