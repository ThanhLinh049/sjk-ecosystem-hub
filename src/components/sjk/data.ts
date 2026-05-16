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
    role: "Khai thác & triển khai quảng cáo ngoài trời tích hợp",
    description:
      "Đơn vị nòng cốt của SJK Group, chuyên khai thác và triển khai quảng cáo ngoài trời tích hợp — từ billboard, LED đến các điểm chạm truyền thông thực tế trên toàn quốc.",
    image: shojiki,
  },
  {
    id: "compasstech",
    index: "02",
    name: "Compass Tech",
    tag: "Technology",
    role: "Đo lường hiệu quả quảng cáo & số hóa quy trình OOH",
    description:
      "Đơn vị công nghệ của tập đoàn, phát triển nền tảng đo lường hiệu quả quảng cáo OOH và số hóa toàn bộ quy trình vận hành ngành truyền thông ngoài trời.",
    image: compasstech,
  },
  {
    id: "wikiooh",
    index: "03",
    name: "Wiki OOH",
    tag: "OOH Data Platform",
    role: "Sàn giao dịch biển bảng ngoài trời toàn quốc",
    description:
      "Nền tảng dữ liệu và sàn giao dịch biển bảng quảng cáo ngoài trời toàn quốc — kết nối chủ vị trí, đại lý và thương hiệu trong một hệ thống minh bạch.",
    image: wikiooh,
  },
  {
    id: "adjika",
    index: "04",
    name: "Adjika",
    tag: "Creative Tech",
    role: "Sáng tạo & quảng cáo công nghệ hiện đại",
    description:
      "Đơn vị sáng tạo công nghệ của SJK Group, ứng dụng Hologram, Drone Show, 3D Anamorphic và các công nghệ trình diễn mới vào chiến dịch thương hiệu.",
    image: adjika,
  },
  {
    id: "anyscreen",
    index: "05",
    name: "AnyScreen",
    tag: "Digital Screen Network",
    role: "Sàn chia sẻ DOOH, mạng lưới màn hình LCD & Standee",
    description:
      "Sàn chia sẻ DOOH và mạng lưới màn hình LCD, Standee phủ rộng các điểm chạm thương mại, văn phòng và không gian tiêu dùng đô thị.",
    image: anyscreen,
  },
  {
    id: "wi5",
    index: "06",
    name: "Wi5",
    tag: "Wifi Marketing",
    role: "Giải pháp tiếp thị qua mạng lưới Wifi diện rộng",
    description:
      "Đơn vị triển khai giải pháp Wifi Marketing diện rộng — biến hạ tầng kết nối thành kênh tiếp thị dữ liệu, tương tác và đo lường người dùng.",
    image: compasstech,
  },
  {
    id: "innox",
    index: "07",
    name: "Inno X Event",
    tag: "Event & POSM",
    role: "Tổ chức sự kiện & POSM ứng dụng công nghệ AI",
    description:
      "Đơn vị tổ chức sự kiện và sản xuất POSM ứng dụng công nghệ AI, mang đến trải nghiệm thương hiệu sáng tạo, tương tác và hiệu quả truyền thông cao.",
    image: adjika,
  },
  {
    id: "oip",
    index: "08",
    name: "OIP",
    tag: "OOH Investment",
    role: "Quỹ đầu tư chuyên biệt ngành quảng cáo ngoài trời",
    description:
      "Quỹ đầu tư chuyên biệt của SJK Group trong ngành OOH — phát triển, hợp tác và mở rộng các tài sản truyền thông ngoài trời có giá trị dài hạn.",
    image: oip,
  },
  {
    id: "lookat",
    index: "09",
    name: "Lookat Media",
    tag: "DOOH Venture",
    role: "Liên doanh Việt – Hàn về hệ thống LED outdoor",
    description:
      "Liên doanh Việt – Hàn của SJK Group, chuyên phát triển và vận hành hệ thống LED outdoor cao cấp tại các vị trí trung tâm đô thị lớn.",
    image: shojiki,
  },
  {
    id: "oem",
    index: "10",
    name: "OEM Group",
    tag: "Merchandise",
    role: "Giải pháp toàn diện về quà tặng doanh nghiệp B2B",
    description:
      "Đơn vị cung cấp giải pháp quà tặng doanh nghiệp B2B toàn diện — từ thiết kế, sản xuất đến triển khai cho các chiến dịch thương hiệu quy mô lớn.",
    image: anyscreen,
  },
  {
    id: "batdongsan",
    index: "11",
    name: "Batdongsan Quangcao",
    tag: "OOH Real Estate",
    role: "Môi giới mặt bằng & quy hoạch điểm quảng cáo",
    description:
      "Đơn vị môi giới mặt bằng và quy hoạch điểm quảng cáo ngoài trời — kết nối quỹ vị trí với nhà khai thác, thương hiệu và nhà đầu tư trong hệ sinh thái OOH.",
    image: wikiooh,
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
  "Acecook",
  "Coca-Cola",
  "Nestlé",
  "Pepsi",
  "Sabeco",
  "Vinhomes",
  "Vingroup",
  "Nova Land",
  "Aeon Mall",
  "MB Bank",
  "VIB",
  "Grab",
  "Shopee",
  "Vietnam Airlines",
  "Vietjet Air",
  "Ford",
  "PNJ",
  "Thế Giới Di Động",
];
