import shojiki from "@/assets/sjk-shojiki.jpg";
import compasstech from "@/assets/sjk-compasstech.jpg";
import wikiooh from "@/assets/sjk-wikiooh.jpg";
import adjika from "@/assets/sjk-adjika.jpg";
import anyscreen from "@/assets/sjk-anyscreen.jpg";
import oip from "@/assets/sjk-oip.jpg";

export type Member = {
  id: string;
  index: string;
  name: string;
  tag: string;
  role: string;
  description: string;
  image: string;
};

export const MEMBERS: Member[] = [
  {
    id: "shojiki",
    index: "01",
    name: "Shojiki",
    tag: "OOH Media",
    role: "Khai thác & triển khai quảng cáo ngoài trời",
    description:
      "Đơn vị nòng cốt trong hệ sinh thái SJK Group, tập trung vào khai thác và triển khai quảng cáo ngoài trời, màn hình LED, bảng quảng cáo và các giải pháp truyền thông tại điểm chạm thực tế.",
    image: shojiki,
  },
  {
    id: "compasstech",
    index: "02",
    name: "CompassTech",
    tag: "Technology",
    role: "Công nghệ vận hành & số hóa quy trình",
    description:
      "Đơn vị định hướng công nghệ, hỗ trợ số hóa quy trình, dữ liệu, nền tảng vận hành và các giải pháp giúp hệ sinh thái OOH hoạt động hiệu quả hơn.",
    image: compasstech,
  },
  {
    id: "wikiooh",
    index: "03",
    name: "WikiOOH",
    tag: "OOH Data Platform",
    role: "Nền tảng dữ liệu & thông tin OOH",
    description:
      "Nền tảng thông tin OOH, giúp kết nối dữ liệu, kiến thức thị trường, vị trí quảng cáo và thông tin truyền thông ngoài trời.",
    image: wikiooh,
  },
  {
    id: "adjika",
    index: "04",
    name: "Adjika",
    tag: "Creative & Communication",
    role: "Sáng tạo & truyền thông thương hiệu",
    description:
      "Đơn vị sáng tạo và truyền thông trong hệ sinh thái, hỗ trợ thương hiệu triển khai các chiến dịch có tính nhận diện, nội dung và hiệu quả truyền thông cao.",
    image: adjika,
  },
  {
    id: "anyscreen",
    index: "05",
    name: "AnyScreen",
    tag: "Digital Screen Network",
    role: "Mạng lưới màn hình số & digital signage",
    description:
      "Đơn vị tập trung vào truyền thông màn hình, digital signage và các điểm chạm hiển thị linh hoạt trong không gian đô thị, thương mại và tiêu dùng.",
    image: anyscreen,
  },
  {
    id: "oip",
    index: "06",
    name: "OIP",
    tag: "OOH Investment",
    role: "Đầu tư & phát triển hạ tầng OOH",
    description:
      "Cánh tay đầu tư của SJK Group trong lĩnh vực quảng cáo ngoài trời, tập trung phát triển, hợp tác và mở rộng hạ tầng OOH có giá trị dài hạn.",
    image: oip,
  },
];

export const NAV = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Thành viên", href: "#ecosystem" },
  { label: "Đối tác", href: "#partners" },
  { label: "Tin tức", href: "#news" },
  { label: "Liên hệ", href: "#contact" },
];

export const PARTNERS = [
  "Daiichi Life",
  "Isuzu",
  "Novaland",
  "Traveloka",
  "Nestlé",
  "MBBank",
  "Rohto",
  "Keppel Land",
  "Lotte Mart",
  "Thế Giới Di Động",
];