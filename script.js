document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. CƠ SỞ DỮ LIỆU (DATABASE)
    // ==========================================

    // Dữ liệu cho 6 thẻ Dashboard ở trang chủ[cite: 1]
    const dashboardData = [
        {
            id: 1,
            title: "1. Lời mở đầu",
            content: `<p>Trong kỷ nguyên số, chỉ với một cú chạm trên màn hình, hàng Terabyte dữ liệu đã băng qua các đại dương, vượt qua hàng ngàn kilomet cáp quang Single-mode để phản hồi yêu cầu của chúng ta trong tích tắc. Chúng ta thường coi sự hiện diện của Internet là điều hiển nhiên, nhưng đằng sau sự mượt mà đó là một "hệ sinh thái" của các thiết bị phần cứng tinh vi và các giao thức phức tạp.</p>
            <p>Với tư cách là một kiến trúc sư mạng, tôi nhìn thấy hạ tầng không chỉ là những sợi dây đồng UTP hay những bộ định tuyến (Router) khô khan, mà là một thực thể đang chuyển mình mạnh mẽ. Bài viết này sẽ đưa bạn khám phá 5 bước ngoặt cốt lõi đã tái định nghĩa toàn bộ ngành quản trị mạng, từ việc "gõ lệnh" thủ công sang tư duy chiến lược về lập trình và trí tuệ nhân tạo.</p>`
        },
        {
            id: 2,
            title: "2. SDN - Khi mạng máy tính sở hữu 'não bộ' tập trung",
            content: `<p>Trong kiến trúc mạng truyền thống, mỗi thiết bị hoạt động như một cá thể độc lập với "bộ não" (Control Plane) riêng biệt. Quy trình quản trị phân tán này yêu cầu kỹ sư phải SSH vào từng thiết bị để cấu hình – một rào cản lớn về tốc độ và là "mảnh đất màu mỡ" cho lỗi con người.</p>
            <p>Cuộc cách mạng SDN (Software-Defined Networking) đã phá vỡ rào cản này bằng cách tách rời hoàn toàn Control Plane (Mặt phẳng điều hành) khỏi Data Plane (Mặt phẳng dữ liệu). Toàn bộ quyền kiểm soát được tập trung về một máy chủ trung tâm gọi là SDN Controller (ví dụ như Cisco DNA Center).</p>
            <ul>
                <li><strong>Southbound API:</strong> Là ngôn ngữ để Controller ra lệnh cho các thiết bị vật lý bên dưới (qua các giao thức như NETCONF hoặc SNMP).</li>
                <li><strong>Northbound API:</strong> Là cầu nối để Controller giao tiếp với các ứng dụng doanh nghiệp (thường qua REST API), giúp mạng lưới hiểu và thực thi các mục tiêu kinh doanh.</li>
            </ul>
            <blockquote>"SDN Controller đóng vai trò là bộ não trung tâm, ra lệnh cho các thiết bị Switch bên dưới – vốn chỉ còn là những cỗ máy chuyển tiếp 'ngu ngốc' (dumb switches) – phải xử lý dữ liệu như thế nào thông qua các giao diện lập trình."</blockquote>
            <p>Lợi ích của SDN không chỉ là quản trị từ một giao diện duy nhất mà còn là khả năng tối ưu hóa chi phí vận hành (OPEX) và rút ngắn thời gian đưa sản phẩm ra thị trường (Time-to-market) cho doanh nghiệp.</p>`
        },
        {
            id: 3,
            title: "3. TCP vs UDP - Sự đánh đổi",
            content: `<p>Ở Lớp Giao vận (Layer 4), mọi quyết định kiến trúc đều xoay quanh sự đánh đổi giữa độ tin cậy và hiệu suất.</p>
            <ul>
                <li><strong>TCP (Transmission Control Protocol):</strong> Giống như việc gửi một bức thư đảm bảo. Nó yêu cầu quy trình "bắt tay 3 bước" (SYN, SYN-ACK, ACK) để thiết lập kết nối. Với Header lớn (20 bytes), TCP mang theo gánh nặng của các cơ chế kiểm tra lỗi và xác nhận (ACK). Nếu dữ liệu mất, nó sẽ gửi lại cho đến khi chính xác tuyệt đối.</li>
                <li><strong>UDP (User Datagram Protocol):</strong> Giống như một cuộc gọi điện thoại trực tiếp. Hoạt động theo nguyên tắc "Fire and Forget" (Gửi và Quên), UDP không cần thiết lập kết nối và có Header cực nhẹ (chỉ 8 bytes). Sự tinh giản này giúp giảm thiểu tối đa "overhead" (chi phí tài nguyên), mang lại tốc độ truyền tải vượt trội.</li>
            </ul>
            <h4>Ứng dụng thực tế:</h4>
            <ul>
                <li><strong>TCP:</strong> Sử dụng cho Web (HTTP/HTTPS), Email (SMTP), Truyền file (FTP) – những nơi mà sai lệch một bit dữ liệu cũng có thể làm hỏng toàn bộ nội dung.</li>
                <li><strong>UDP:</strong> Sử dụng cho Voice IP, Video Call, Game Online.</li>
            </ul>
            <p>Trong thế giới kỹ thuật số, việc mất mát vài khung hình (UDP) là cái giá chấp nhận được để duy trì sự mượt mà. Một âm thanh bị trễ 2 giây do TCP cố gắng gửi lại sẽ trở nên vô nghĩa trong một cuộc hội thoại trực tiếp.</p>`
        },
        {
            id: 4,
            title: "4. Spine-Leaf - Kiến trúc 'một bước nhảy'",
            content: `<p>Khi các ứng dụng đám mây bùng nổ, mô hình 3 lớp truyền thống (Core-Distribution-Access) trở nên hụt hơi trước lưu lượng East-West traffic (lưu lượng trao đổi ngang hàng giữa các máy chủ trong nội bộ Data Center). Kiến trúc Spine-Leaf ra đời như một "bộ khung" (fabric) hiện đại cho Cloud.</p>
            <p>Trong mô hình này, mọi thiết bị Leaf (kết nối máy chủ) đều được đấu nối trực tiếp vào mọi thiết bị Spine (lõi trung tâm). Quy hoạch này đảm bảo mọi luồng dữ liệu giữa các máy chủ luôn chỉ đi qua đúng 1 hop (trạm trung chuyển). Việc loại bỏ các bước trung gian không cần thiết giúp giảm độ trễ xuống mức cực thấp và cho phép băng thông mở rộng theo quy mô ngang (Scale-out) một cách dễ dàng, đáp ứng nhu cầu khắt khe của các hệ thống ảo hóa hiện đại.</p>`
        },
        {
            id: 5,
            title: "5. Bảo mật không chỉ là Tường lửa",
            content: `<p>Một sai lầm kinh điển của nhiều doanh nghiệp là chỉ tập trung xây "tường cao, cổng kín" với Firewall ở cửa ngõ mà bỏ trống "sân nhà" mạng LAN. Như một quy tắc vàng trong ngành:</p>
            <blockquote>"Nếu một kẻ tấn công có thể chạm tay vật lý vào thiết bị của bạn, nó không còn là thiết bị của bạn nữa."</blockquote>
            <p>Các mối đe dọa bên trong như DHCP Spoofing (giả mạo máy chủ cấp IP) hay ARP Spoofing (đánh cắp danh tính Router) có thể làm tê liệt hệ thống từ bên trong. Để bảo vệ mạng từ cổng cắm vật lý, chúng ta cần triển khai các lớp phòng vệ:</p>
            <ul>
                <li><strong>DHCP Snooping:</strong> Kỹ thuật này chia cổng Switch thành Trusted Port (Cổng tin cậy - nối với máy chủ DHCP thật) và Untrusted Port (Cổng không tin cậy - nối với người dùng). Mọi bản tin cấp IP giả mạo từ cổng không tin cậy sẽ bị chặn đứng ngay lập tức.</li>
                <li><strong>Dynamic ARP Inspection (DAI):</strong> Kiểm tra tính hợp lệ của các bản tin ARP dựa trên cơ sở dữ liệu từ DHCP Snooping để ngăn chặn các cuộc tấn công nghe lén (Man-in-the-Middle).</li>
                <li><strong>Port Security:</strong> Giới hạn địa chỉ MAC được phép truy cập, đảm bảo chỉ thiết bị hợp lệ mới có thể "nói chuyện" với mạng.</li>
            </ul>
            <p>Tư duy bảo mật hiện đại là "Tin tưởng nhưng phải xác minh" (Trust but Verify) ngay từ những kết nối vật lý đầu tiên.</p>`
        },
        {
            id: 6,
            title: "6. Tương lai của Kỹ sư mạng",
            content: `<p>Kỷ nguyên của việc gõ từng dòng lệnh CLI thủ công đang lùi xa, nhường chỗ cho API và tự động hóa. Kỹ sư mạng hiện đại phải tư duy như một lập trình viên, sử dụng các công cụ mạnh mẽ để quản trị hệ thống ở quy mô hàng ngàn thiết bị:</p>
            <ul>
                <li><strong>REST API & CRUD:</strong> Đây là ngôn ngữ giao tiếp tiêu chuẩn. Việc quản lý cấu hình mạng giờ đây được thực hiện qua các phương thức HTTP tương ứng với chu trình CRUD:
                    <ul>
                        <li>POST (Create - Tạo mới cấu hình)</li>
                        <li>GET (Read - Đọc dữ liệu)</li>
                        <li>PUT/PATCH (Update - Cập nhật thay đổi)</li>
                        <li>DELETE (Delete - Xóa bỏ)</li>
                    </ul>
                </li>
                <li><strong>JSON:</strong> Định dạng dữ liệu chuẩn với các cặp "Key-Value", giúp máy tính trao đổi thông tin nhanh chóng và con người cũng có thể dễ dàng đọc hiểu.</li>
                <li><strong>Ansible:</strong> Công cụ quản lý cấu hình theo cơ chế Agentless (không cần cài phần mềm lên thiết bị mạng), cho phép đẩy cấu hình đồng loạt qua các kịch bản (Playbooks), loại bỏ hoàn toàn lỗi chủ quan từ con người.</li>
            </ul>`
        }
    ];

    // Cấu trúc danh mục Sidebar (Trang con thứ 1)[cite: 1]
    const courseStructure = [
        {
            part: 1,
            title: "Phần 1: Nền tảng về mạng",
            lessons: [
                { id: "1.1", title: "1.1 Vai trò và chức năng của các thiết bị mạng" },
                { id: "1.2", title: "1.2 Các mô hình kiến trúc mạng" },
                { id: "1.3", title: "1.3 Các loại cáp mạng và cổng kết nối" },
                { id: "1.4", title: "1.4 Phân biệt TCP và UDP" },
                { id: "1.5", title: "1.5 Cấu hình và xác minh địa chỉ IPv4" },
                { id: "1.6", title: "1.6 Cấu hình và xác minh địa chỉ IPv6" },
                { id: "1.7", title: "1.7 Nguyên lý cơ bản của mạng không dây" },
                { id: "1.8", title: "1.8 Các nguyên lý ảo hóa" }
            ]
        },
        {
            part: 2,
            title: "Phần 2: Truy cập mạng",
            lessons: [
                { id: "2.1", title: "2.1 Cấu hình và xác minh VLANs" },
                { id: "2.2", title: "2.2 Chuyển mạch và giao thức Spanning Tree" },
                { id: "2.3", title: "2.3 Cấu hình EtherChannel" },
                { id: "2.4", title: "2.4 Giao thức khám phá thiết bị láng giềng" },
                { id: "2.5", title: "2.5 Kiến trúc mạng không dây của Cisco" }
            ]
        },
        {
            part: 3,
            title: "Phần 3: Kết nối IP",
            lessons: [
                { id: "3.1", title: "3.1 Bảng định tuyến hoạt động như thế nào" },
                { id: "3.2", title: "3.2 Cách bộ định tuyến đưa ra quyết định" },
                { id: "3.3", title: "3.3 Cấu hình và xác minh định tuyến tĩnh" },
                { id: "3.4", title: "3.4 Cấu hình và xác minh định tuyến động OSPFv2" },
                { id: "3.5", title: "3.5 Giao thức dự phòng Default Gateway" }
            ]
        },
        {
            part: 4,
            title: "Phần 4: Các dịch vụ IP",
            lessons: [
                { id: "4.1", title: "4.1 Cấu hình và xác minh NAT" },
                { id: "4.2", title: "4.2 Cấu hình NTP" },
                { id: "4.3", title: "4.3 Vai trò của DHCP và DNS" },
                { id: "4.4", title: "4.4 Cấu hình và giám sát thiết bị với SNMP, Syslog" },
                { id: "4.5", title: "4.5 Quản lý cấu hình thiết bị qua TFTP/FTP" },
                { id: "4.6", title: "4.6 Nguyên lý cơ bản của Chất lượng dịch vụ (QoS)" }
            ]
        },
        {
            part: 5,
            title: "Phần 5: Nền tảng Bảo mật",
            lessons: [
                { id: "5.1", title: "5.1 Các khái niệm bảo mật cốt lõi" },
                { id: "5.2", title: "5.2 Kiểm soát truy cập vật lý và mật khẩu" },
                { id: "5.3", title: "5.3 Các khái niệm về VPN" },
                { id: "5.4", title: "5.4 Cấu hình và xác minh Access Control Lists (ACLs)" },
                { id: "5.5", title: "5.5 Các tính năng bảo mật Layer 2" },
                { id: "5.6", title: "5.6 Các giao thức AAA" },
                { id: "5.7", title: "5.7 Bảo mật mạng không dây" }
            ]
        },
        {
            part: 6,
            title: "Phần 6: Tự động hóa và Lập trình hóa",
            lessons: [
                { id: "6.1", title: "6.1 Quản trị mạng truyền thống vs SDN" },
                { id: "6.2", title: "6.2 Kiến trúc Cisco DNA Center" },
                { id: "6.3", title: "6.3 Đặc điểm của REST-based APIs" },
                { id: "6.4", title: "6.4 Đọc và hiểu định dạng dữ liệu JSON" },
                { id: "6.5", title: "6.5 Các công cụ quản lý cấu hình" }
            ]
        }
    ];

    // Nội dung chi tiết từng bài học (Trang con thứ 2)[cite: 1]
    const lessonContent = {
        "1.1": `<p>Mỗi thiết bị trong mạng đóng một vai trò chuyên biệt để đảm bảo luồng dữ liệu được truyền đi chính xác, an toàn và hiệu quả.</p>
                <ul>
                    <li><strong>Bộ định tuyến (Routers):</strong> Hoạt động ở Lớp 3 (Network Layer). Chức năng chính: Kết nối các mạng (Networks) khác nhau lại với nhau. Router đọc địa chỉ IP đích của gói tin, tra cứu bảng định tuyến và quyết định đường đi tốt nhất. Nó chia cắt các miền quảng bá (Broadcast Domain), giúp giảm thiểu rác mạng.</li>
                    <li><strong>Switch Lớp 2 (L2 Switches):</strong> Hoạt động ở Lớp 2. Kết nối các thiết bị đầu cuối trong cùng một mạng LAN. Chuyển tiếp khung dữ liệu dựa trên địa chỉ MAC. Học địa chỉ MAC và lưu vào bảng CAM.</li>
                    <li><strong>Switch Lớp 3 (L3 / Multilayer Switches):</strong> Là sự kết hợp giữa Switch L2 và Router. Vừa có khả năng chuyển mạch tốc độ cao dựa trên MAC, vừa định tuyến giữa các VLAN dựa trên IP.</li>
                    <li><strong>Tường lửa (Firewalls):</strong> Kiểm soát luồng giao thông vào/ra mạng dựa trên các bộ quy tắc bảo mật. Firewall hiện đại (NGFW) còn kiểm tra sâu vào gói tin, ngăn chặn mã độc.</li>
                    <li><strong>Điểm truy cập không dây (Access Points - APs):</strong> Mở rộng kết nối mạng có dây thành mạng không dây (Wi-Fi).</li>
                    <li><strong>Bộ điều khiển (Controllers - WLC, DNA Center):</strong> Quản lý tập trung mạng quy mô lớn. WLC quản lý hàng ngàn AP. DNA Center quản lý, tự động hóa toàn bộ hệ thống mạng (SDN).</li>
                </ul>`,
        "1.2": `<p>Kiến trúc mạng quyết định cách các thiết bị được đấu nối vật lý và logic để đảm bảo tính sẵn sàng cao.</p>
                <ul>
                    <li><strong>Mô hình 3 lớp (3-Tier Architecture):</strong> Gồm Core Layer (Lớp Lõi - tốc độ cao), Distribution Layer (Lớp Phân phối - định tuyến VLAN, ACLs) và Access Layer (Lớp Truy cập - thiết bị đầu cuối cắm vào).</li>
                    <li><strong>Mô hình 2 lớp (Collapsed Core):</strong> Dành cho doanh nghiệp vừa/nhỏ. Core và Distribution gộp chung vào 1 thiết bị để tiết kiệm chi phí.</li>
                    <li><strong>Mô hình Spine-Leaf:</strong> Chuẩn mực cho Data Center. Mọi thiết bị Leaf đều nối trực tiếp với mọi thiết bị Spine. Dữ liệu chỉ qua 1 trạm trung chuyển (1 hop), độ trễ cực thấp.</li>
                    <li><strong>Mạng diện rộng (WAN):</strong> Kết nối các chi nhánh xa nhau qua MPLS, Metro Ethernet, hoặc SD-WAN.</li>
                    <li><strong>SOHO:</strong> Mạng gia đình/văn phòng nhỏ dùng thiết bị "All-in-one" (Router Wi-Fi).</li>
                </ul>`,
        "1.3": `<p>Tín hiệu cần môi trường vật lý để truyền dẫn:</p>
                <ul>
                    <li><strong>Cáp đồng (Copper Cables - UTP/STP):</strong> Truyền bằng xung điện, đầu nối RJ-45. Chuẩn Cat5e, Cat6. Giới hạn 100 mét. Dễ bị nhiễu (EMI) nếu không bọc chống nhiễu.</li>
                    <li><strong>Cáp quang (Fiber Optic):</strong> Truyền bằng ánh sáng, miễn nhiễm nhiễu điện từ. Single-mode (lõi nhỏ, truyền cực xa hàng trăm km bằng Laser). Multi-mode (lõi lớn, dùng đèn LED, truyền ngắn trong tòa nhà).</li>
                    <li><strong>PoE (Power over Ethernet):</strong> Cáp đồng vừa truyền dữ liệu vừa cấp điện năng (cho AP, Camera, IP Phone). Chuẩn 802.3af (15.4W), 802.3at (30W), 802.3bt (lên đến 90W).</li>
                </ul>`,
        "1.4": `<p>Lớp Giao vận (Layer 4) có hai giao thức cốt lõi. Hiểu sự khác biệt này là bắt buộc trong mạng.</p>
                <table style="width:100%; border-collapse: collapse; margin-top:10px;" border="1">
                    <tr style="background:rgba(255,255,255,0.1);"><th>Đặc điểm</th><th>TCP</th><th>UDP</th></tr>
                    <tr><td><strong>Tính chất</strong></td><td>Hướng kết nối (Connection-oriented)</td><td>Phi kết nối (Connectionless)</td></tr>
                    <tr><td><strong>Độ tin cậy</strong></td><td>Cao. Có ACK. Nếu mất, gửi lại.</td><td>Thấp. Gửi và Quên.</td></tr>
                    <tr><td><strong>Thiết lập</strong></td><td>Bắt tay 3 bước (SYN, SYN-ACK, ACK)</td><td>Không cần thiết lập</td></tr>
                    <tr><td><strong>Tốc độ</strong></td><td>Chậm, Header lớn (20 bytes), có độ trễ</td><td>Rất nhanh, Header nhỏ (8 bytes)</td></tr>
                    <tr><td><strong>Ứng dụng</strong></td><td>Web, Email, FTP (Cần chính xác)</td><td>Voice IP, Game Online, DNS (Cần tốc độ)</td></tr>
                </table>`,
        "1.5": `<p>IPv4 là giao thức định danh thiết bị dài 32 bit, chia làm 4 Octet.</p>
                <ul>
                    <li><strong>Private vs Public IP:</strong> Public IP độc nhất toàn cầu để ra Internet. Private IP dùng miễn phí nội bộ (Lớp A, B, C) cần NAT để ra mạng ngoài.</li>
                    <li><strong>Subnetting (Chia mạng con):</strong> Mượn bit phần Host chuyển thành Network. Giúp tránh lãng phí IP, thu hẹp vùng Broadcast.</li>
                    <li><strong>VLSM (Variable Length Subnet Mask):</strong> Chia mạng con của mạng con. Cắt dải IP vừa khít số lượng máy (VD: /26 cho 50 IP, /30 cho đường link point-to-point 2 IP).</li>
                </ul>`,
        "1.6": `<p>IPv6 dài 128 bit, biểu diễn bằng Thập lục phân (Hexadecimal).</p>
                <ul>
                    <li><strong>Đặc điểm:</strong> KHÔNG có Broadcast (thay bằng Multicast/Anycast). Không cần NAT. Header đơn giản, xử lý nhanh.</li>
                    <li><strong>Các loại địa chỉ:</strong>
                        <ul>
                            <li><strong>Global Unicast (GUA):</strong> Tương đương Public IP.</li>
                            <li><strong>Link-Local:</strong> Tự sinh ra (FE80::), dùng giao tiếp trong cùng phân đoạn mạng (không qua Router).</li>
                            <li><strong>Unique Local (ULA):</strong> Tương đương Private IP (FC00:: / FD00::).</li>
                        </ul>
                    </li>
                    <li><strong>SLAAC:</strong> Thiết bị tự động hỏi Router và tự tạo IPv6 mà không cần DHCP tĩnh.</li>
                </ul>`,
        "1.7": `<p>Mạng không dây sử dụng sóng vô tuyến (RF).</p>
                <ul>
                    <li><strong>Băng tần 2.4 GHz:</strong> Bước sóng dài, xuyên tường tốt, phủ xa. Tốc độ chậm, dễ bị nhiễu (chỉ có 3 kênh không chồng lấn).</li>
                    <li><strong>Băng tần 5 GHz:</strong> Tốc độ rất nhanh, nhiều kênh không chồng lấn. Phủ sóng hẹp, xuyên tường kém.</li>
                    <li><strong>SSID:</strong> Tên mạng Wi-Fi hiển thị cho người dùng.</li>
                    <li><strong>BSS và ESS:</strong> BSS là vùng phủ sóng 1 AP. ESS là dùng nhiều AP phát chung SSID giúp thiết bị chuyển vùng (Roaming) mượt mà.</li>
                </ul>`,
        "1.8": `<p>Ảo hóa (Virtualization) tạo ra nhiều máy tính ảo (VMs) trên 1 máy chủ vật lý.</p>
                <ul>
                    <li><strong>Hypervisor:</strong> Phần mềm chia sẻ tài nguyên. Type 1 (Bare Metal - cài trực tiếp lên phần cứng như ESXi). Type 2 (Hosted - cài trên HĐH như VMware Workstation).</li>
                    <li><strong>vSwitch & vNIC:</strong> Các máy ảo giao tiếp qua Card mạng ảo (vNIC) nối vào Switch ảo (vSwitch) nằm trong Hypervisor trước khi ra cáp vật lý.</li>
                </ul>
                <p><em>Hoàn thành Phần 1. Kiến thức nền tảng này là ngôn ngữ chung của thế giới Network.</em></p>`,
        "2.1": `<p><strong>VLAN (Mạng LAN ảo)</strong> chia một Switch vật lý thành nhiều Switch logic. Mỗi VLAN là một miền Broadcast riêng. Lợi ích: Bảo mật, Hiệu suất và Tính linh hoạt.</p>
                <ul>
                    <li><strong>Access Port:</strong> Cổng nối với thiết bị đầu cuối, chỉ thuộc 1 VLAN.</li>
                    <li><strong>Trunk Port:</strong> Nối giữa Switch-Switch hoặc Switch-Router. Cho phép nhiều VLAN đi qua.</li>
                    <li><strong>Giao thức 802.1Q (Tagging):</strong> Đóng dấu thẻ VLAN dài 4-byte vào gói tin khi qua đường Trunk để Switch nhận biết thuộc VLAN nào.</li>
                    <li><strong>Native VLAN:</strong> Khung dữ liệu không được gắn thẻ (Untagged) qua đường Trunk sẽ vào Native VLAN (mặc định là VLAN 1). Nên đổi sang VLAN trống để bảo mật.</li>
                </ul>`,
        "2.2": `<p>Kết nối vòng tròn vật lý ở Lớp 2 gây ra thảm họa Loop (Bão Broadcast, Lỗi bảng MAC). Giao thức STP ra đời để chặn vòng lặp về mặt logic nhưng vẫn giữ dự phòng vật lý.</p>
                <ul>
                    <li><strong>STP (802.1D):</strong> Bầu chọn Root Bridge (Vua) -> Root Port (đường ngắn nhất về Vua) -> Designated Port -> Khóa các cổng dư thừa (Blocking).</li>
                    <li><strong>RSTP (802.1w):</strong> Phiên bản cải tiến, phục hồi sự cố cực nhanh (dưới 1 giây) thay vì mất 30-50s như STP cũ. Gồm 3 trạng thái: Discarding, Learning, Forwarding.</li>
                </ul>`,
        "2.3": `<p><strong>EtherChannel</strong> gộp nhiều đường cáp vật lý thành một đường logic.</p>
                <ul>
                    <li><strong>Lợi ích:</strong> Tăng băng thông (gộp 4 dây 1Gbps thành 4Gbps thay vì bị STP khóa), dự phòng mượt mà, cân bằng tải.</li>
                    <li><strong>Giao thức LACP (802.3ad):</strong> Chuẩn mở quốc tế. Tự động đàm phán gộp cổng qua 2 chế độ: Active (Chủ động mời) và Passive (Bị động chờ). Để gộp thành công, ít nhất 1 bên phải Active.</li>
                </ul>`,
        "2.4": `<p>Giao thức giúp thiết bị tự giới thiệu thông tin với láng giềng kết nối trực tiếp.</p>
                <ul>
                    <li><strong>CDP (Cisco Discovery Protocol):</strong> Độc quyền Cisco, bật mặc định. Cung cấp Hostname, IP, cổng kết nối, hệ điều hành.</li>
                    <li><strong>LLDP (802.1AB):</strong> Chuẩn mở quốc tế, đa hãng. Thường bị tắt mặc định trên Cisco. Hỗ trợ thêm tính năng cấp nguồn điện (LLDP-MED).</li>
                </ul>
                <p><em>Lưu ý: Luôn tắt CDP/LLDP trên cổng Access nối với người dùng để tránh lộ thông tin bảo mật.</em></p>`,
        "2.5": `<p>Kiến trúc để quản lý hàng trăm AP trong doanh nghiệp:</p>
                <ul>
                    <li><strong>Kiến trúc Độc lập (Autonomous):</strong> Mỗi AP cấu hình độc lập. Chuyển vùng kém, khó quản lý, đã lỗi thời.</li>
                    <li><strong>Kiến trúc Quản lý tập trung (Lightweight):</strong> WLC (Bộ não) tập trung chính sách bảo mật và Roaming. LAP (Trọng lượng nhẹ) chỉ phát sóng và nghe lệnh. Dữ liệu chạy qua đường hầm mã hóa CAPWAP về WLC.</li>
                </ul>`,
        "3.1": `<p>Bảng định tuyến là "bộ não" của Router để quyết định hướng đi dữ liệu. Mục nhập gồm: Mạng đích, Next-hop IP (Trạm kế tiếp), Exit Interface.</p>
                <ul>
                    <li><strong>Directly Connected (C/L):</strong> Tự sinh khi gán IP vào cổng.</li>
                    <li><strong>Static Routes (S):</strong> Cấu hình thủ công bằng tay.</li>
                    <li><strong>Dynamic Protocols (O, D, R, B):</strong> Router tự trao đổi thông tin để vẽ bản đồ mạng.</li>
                </ul>`,
        "3.2": `<p>Quy trình suy luận logic vô cùng nghiêm ngặt gồm 3 bước của Router khi có nhiều đường đi:</p>
                <ol>
                    <li><strong>Longest Match Rule:</strong> Ưu tiên đường đi cụ thể nhất (Subnet Mask lớn nhất). VD: /26 sẽ thắng /24.</li>
                    <li><strong>Administrative Distance (AD):</strong> Nếu độ dài khớp bằng nhau, xét AD (độ tin cậy). AD càng nhỏ càng đáng tin (C:0, S:1, OSPF:110).</li>
                    <li><strong>Metric (Chi phí):</strong> Nếu cùng một nguồn giao thức, dùng Metric. Đường có Metric thấp hơn (băng thông lớn hơn) sẽ thắng.</li>
                </ol>`,
        "3.3": `<p>Định tuyến tĩnh bảo mật cao, không tốn RAM nhưng mất thời gian cấu hình và không tự động chuyển đường khi đứt cáp.</p>
                <ul>
                    <li><strong>IPv4:</strong> <code>ip route [Mạng đích] [Mask] [Next-hop]</code></li>
                    <li><strong>IPv6:</strong> <code>ipv6 route [Mạng đích/Prefix] [Next-hop]</code></li>
                    <li><strong>Default Route (Tuyến lối thoát cuối cùng):</strong> Rất quan trọng để ra Internet. IPv4: <code>ip route 0.0.0.0 0.0.0.0 [IP ISP]</code>. Trong bảng định tuyến có dấu sao S*.</li>
                </ul>`,
        "3.4": `<p><strong>OSPFv2 (Open Shortest Path First):</strong> Giao thức Link-State, xây dựng bản đồ tổ ong mạng và dùng thuật toán Dijkstra (SPF) tìm đường ngắn nhất.</p>
                <ul>
                    <li><strong>Cost (Metric):</strong> Băng thông tham chiếu / Băng thông giao diện (Cáp quang có Cost tốt hơn cáp đồng).</li>
                    <li><strong>Cách cấu hình:</strong> Bật <code>router ospf 1</code> -> Chọn <code>router-id</code> -> Công bố mạng <code>network [IP] [Wildcard Mask] area 0</code>.</li>
                    <li><strong>Passive Interface:</strong> Chặn gửi OSPF "hello" xuống cổng LAN (chỉ có PC) để bảo mật.</li>
                </ul>`,
        "3.5": `<p><strong>FHRP - HSRP:</strong> Giao thức dự phòng Cổng mặc định (Default Gateway). Nhóm 2 Router lại tạo thành 1 Virtual IP và Virtual MAC. PC sẽ trỏ Gateway về Virtual IP.</p>
                <ul>
                    <li><strong>Active Router:</strong> Ưu tiên Priority cao nhất, trực tiếp xử lý dữ liệu ra mạng.</li>
                    <li><strong>Standby Router:</strong> Lắng nghe. Nếu Active sập, nó tự động lên thay thế ngay lập tức.</li>
                    <li><strong>Preempt:</strong> Tính năng cho phép Router xịn hơn giành lại quyền Active ngay khi sửa xong.</li>
                </ul>`,
        "4.1": `<p><strong>NAT:</strong> Dịch Private IP sang Public IP để ra Internet.</p>
                <ul>
                    <li><strong>Static NAT:</strong> Dịch 1 đổi 1 tĩnh. Dành cho Server (Web, Mail) cần IP ngoài cố định.</li>
                    <li><strong>Dynamic NAT:</strong> Dùng 1 "bể" IP Public cấp ngẫu nhiên cho PC. Ít dùng vì tốn IP Public.</li>
                    <li><strong>PAT (NAT Overload):</strong> Hàng ngàn PC dùng chung MỘT Public IP. Phân biệt các máy tính nội bộ thông qua Số Cổng (Port Number) Lớp 4.</li>
                </ul>`,
        "4.2": `<p><strong>NTP:</strong> Giao thức (UDP 123) đồng bộ hóa thời gian. Thời gian sai sẽ làm vô hiệu hóa các chứng chỉ bảo mật, VPN, và gây khó khăn khi đọc Log (Troubleshooting).</p>
                <ul>
                    <li><strong>Kiến trúc Stratum:</strong> Hình tháp. Stratum 0 (GPS, đồng hồ nguyên tử) -> Stratum 1 (Server cắm trực tiếp) -> Stratum 2 (Router doanh nghiệp).</li>
                </ul>`,
        "4.3": `<p>Bộ đôi tự động hóa ở Lớp Ứng dụng:</p>
                <ul>
                    <li><strong>DHCP:</strong> Cấp IP tự động qua quy trình 4 bước D.O.R.A (Discover - Offer - Request - Acknowledge).</li>
                    <li><strong>DNS:</strong> Danh bạ Internet. Dịch tên miền (google.com) thành địa chỉ IP (142.250.x.x) để máy tính kết nối.</li>
                </ul>`,
        "4.4": `<p>Giám sát hàng trăm thiết bị tập trung:</p>
                <ul>
                    <li><strong>Syslog (UDP 514):</strong> Đẩy nhật ký sự kiện của Router về Server trung tâm. Cấp độ từ 0 (Emergencies - Sập) đến 7 (Debugging).</li>
                    <li><strong>SNMP:</strong> Giám sát chủ động và vẽ biểu đồ. Gồm SNMP Manager (NMS), Agent và bộ từ điển MIB. Bắt buộc dùng SNMPv3 vì có tính năng Xác thực và Mã hóa (SNMPv1/v2 gửi mã rõ dễ bị hack).</li>
                </ul>`,
        "4.5": `<p>Sao lưu và nâng cấp hệ điều hành (IOS):</p>
                <ul>
                    <li><strong>TFTP (UDP 69):</strong> Rất nhanh, nhẹ, không mật khẩu. Thường cắm cáp trực tiếp chạy trên mạng LAN an toàn.</li>
                    <li><strong>FTP (TCP 20/21):</strong> Đáng tin cậy hơn, có kiểm tra lỗi, bắt buộc có Username/Password.</li>
                </ul>`,
        "4.6": `<p><strong>QoS (Quality of Service):</strong> Ưu tiên dữ liệu khi mạng nghẽn.</p>
                <ol>
                    <li><strong>Phân loại:</strong> Nhận diện gói tin qua ACL/Port (VoIP hay Web).</li>
                    <li><strong>Đánh dấu:</strong> Dán nhãn ở L2 (CoS) hoặc L3 (DSCP). Gói thoại (Voice) luôn dán chuẩn cao nhất EF (Expedited Forwarding - 46).</li>
                    <li><strong>Quản lý hàng đợi:</strong> Gói tin Voice nhãn EF đưa vào Priority Queue vượt lên đầu hàng, đảm bảo độ trễ thấp nhất.</li>
                </ol>`,
        "5.1": `<p>Các khái niệm cốt lõi của an toàn thông tin:</p>
                <ul>
                    <li><strong>Vulnerability (Lỗ hổng):</strong> Điểm yếu hệ thống (bug phần mềm, cấu hình sai).</li>
                    <li><strong>Threat (Mối đe dọa):</strong> Tác nhân lợi dụng lỗ hổng (Hacker, Malware).</li>
                    <li><strong>Exploit (Khai thác):</strong> Công cụ/Hành động chọc xuyên lỗ hổng.</li>
                    <li><strong>Mitigation (Giảm nhẹ):</strong> Cập nhật (Patching), Firewall, đào tạo nhân viên.</li>
                </ul>`,
        "5.2": `<p>"Nếu kẻ tấn công chạm vật lý vào Router, nó không còn là Router của bạn".</p>
                <ul>
                    <li><strong>Kiểm soát vật lý:</strong> Khóa phòng Server, tắt các cổng mạng công cộng (sảnh chờ) không dùng đến.</li>
                    <li><strong>Mật khẩu an toàn:</strong> Tuyệt đối không lưu bản rõ. Phải dùng lệnh <code>enable secret</code> để băm mật khẩu (MD5, SHA-256) lưu vào cấu hình.</li>
                </ul>`,
        "5.3": `<p><strong>VPN:</strong> Tạo đường hầm ảo mã hóa qua Internet công cộng.</p>
                <ul>
                    <li><strong>Site-to-Site VPN:</strong> Kết nối cố định giữa 2 Router chi nhánh (dùng IPsec). Người dùng vô hình với VPN này.</li>
                    <li><strong>Remote Access VPN:</strong> Nhân viên ở quán cafe dùng phần mềm (Cisco AnyConnect) quay đường hầm về trụ sở. Thường dùng SSL/TLS.</li>
                </ul>`,
        "5.4": `<p><strong>ACLs:</strong> Bộ lọc cho phép (Permit) hoặc từ chối (Deny) gói tin.</p>
                <ul>
                    <li><strong>Standard ACL (1-99):</strong> Chỉ lọc theo IP Nguồn. Đặt càng gần Đích càng tốt.</li>
                    <li><strong>Extended ACL (100-199):</strong> Lọc chi tiết IP Nguồn, Đích, Giao thức, Cổng. Đặt càng gần Nguồn càng tốt để tiêu diệt gói tin sớm.</li>
                    <li><strong>Quy tắc sinh tử:</strong> Đọc từ trên xuống. Ở cuối danh sách luôn ẩn câu lệnh cấm ngầm định (Implicit Deny Any).</li>
                </ul>`,
        "5.5": `<p>Các tính năng chống phá hoại từ trong mạng LAN:</p>
                <ul>
                    <li><strong>Port Security:</strong> Khóa địa chỉ MAC trên cổng. Chặn thiết bị lạ xâm nhập.</li>
                    <li><strong>DHCP Snooping:</strong> Chống DHCP giả mạo bằng Trusted Port (cổng cắm Server thật) và Untrusted Port.</li>
                    <li><strong>Dynamic ARP Inspection (DAI):</strong> Dựa vào cơ sở DHCP Snooping kiểm tra gói tin ARP để chặn tấn công nghe lén (Man-in-the-Middle).</li>
                </ul>`,
        "5.6": `<p><strong>AAA Framework:</strong> Quản lý tập trung tài khoản thiết bị thay vì tài khoản Local.</p>
                <ul>
                    <li><strong>RADIUS:</strong> Chuẩn mở quốc tế, dùng UDP, chỉ mã hóa mật khẩu, gộp chung Xác thực & Cấp quyền. Dùng cho truy cập Wi-Fi/VPN.</li>
                    <li><strong>TACACS+:</strong> Độc quyền Cisco, dùng TCP cực an toàn, mã hóa toàn bộ dữ liệu, tách rời Xác thực - Cấp quyền - Ghi nhận. Dùng quản trị CLI (Admin login).</li>
                </ul>`,
        "5.7": `<p>Mã hóa Wi-Fi là sống còn.</p>
                <ul>
                    <li><strong>WPA2:</strong> Dùng thuật toán AES mạnh. WPA2-Personal dùng chung 1 mật khẩu dễ bị hack offline. WPA2-Enterprise (802.1X) dùng tài khoản cá nhân kết nối RADIUS.</li>
                    <li><strong>WPA3:</strong> Khắc phục lỗi KRACK bằng giao thức SAE. Dù mật khẩu yếu, hacker cũng không thể dùng tool dò mật khẩu offline. Mức mã hóa lên tới 192-bit.</li>
                </ul>`,
        "6.1": `<p><strong>SDN (Software-Defined Networking):</strong> Cuộc cách mạng tách rời Control Plane (Não bộ) ra khỏi thiết bị, tập trung vào máy chủ SDN Controller.</p>
                <ul>
                    <li><strong>Mạng truyền thống:</strong> Mỗi thiết bị tự chạy định tuyến. Kỹ sư phải SSH cấu hình thủ công từng máy, cực kỳ chậm.</li>
                    <li><strong>SDN:</strong> Controller tập trung ra lệnh. Các Switch chỉ còn là cỗ máy chuyển tiếp (dumb switches). Cấu hình 100 Switch bằng 1 cú click từ màn hình trung tâm.</li>
                </ul>`,
        "6.2": `<p><strong>Cisco DNA Center:</strong> SDN Controller mạnh nhất của Cisco cho mạng LAN dựa trên Intent-Based Networking (IBN).</p>
                <ul>
                    <li><strong>Southbound APIs:</strong> Nói chuyện với Switch vật lý (NETCONF, RESTCONF).</li>
                    <li><strong>Northbound APIs:</strong> Nói chuyện với ứng dụng phần mềm (REST APIs).</li>
                    <li><strong>Assurance:</strong> Tính năng ăn tiền nhất, dùng AI/ML để thu thập Telemetry, dự đoán điểm nghẽn và tìm nguyên nhân lỗi mạng tự động.</li>
                </ul>`,
        "6.3": `<p>REST API là chuẩn lập trình mạng qua giao thức HTTP/HTTPS.</p>
                <ul>
                    <li><strong>CRUD:</strong> POST (Tạo mới), GET (Đọc), PUT/PATCH (Cập nhật), DELETE (Xóa).</li>
                    <li><strong>Mã phản hồi:</strong> 200 (Thành công), 400 (Bạn viết sai cú pháp), 401 (Sai mật khẩu), 404 (Không tìm thấy), 500 (Lỗi máy chủ Router).</li>
                </ul>`,
        "6.4": `<p><strong>JSON:</strong> Ngôn ngữ chuẩn trao đổi dữ liệu API (Key: Value).</p>
                <ul>
                    <li>Luôn dùng dấu ngoặc kép cho Khóa <code>"key"</code>.</li>
                    <li><code>{ }</code> bọc Object, <code>[ ]</code> bọc Array (Mảng).</li>
                    <li>Chuỗi string cần ngoặc kép, số (Number) và Boolean (true/false) không cần ngoặc kép.</li>
                </ul>`,
        "6.5": `<p>Các công cụ Quản lý Cấu hình đa hãng (Configuration Management):</p>
                <ul>
                    <li><strong>Ansible:</strong> Agentless (không cần cài phần mềm lên thiết bị mạng đích), dùng mô hình Push qua SSH. Ngôn ngữ YAML (Playbooks). Rất được ưa chuộng trong Network.</li>
                    <li><strong>Puppet:</strong> Mô hình Pull (thiết bị tự liên lạc hỏi cấu hình), cần cài Agent, ngôn ngữ Ruby (Manifests).</li>
                    <li><strong>Chef:</strong> Tương tự Puppet, mô hình Pull, cài Agent, dùng Ruby (Recipes, Cookbooks). Thường dùng cho Server DevOps.</li>
                </ul>`
    };

    // ==========================================
    // 2. LOGIC ĐIỀU KHIỂN GIAO DIỆN (DOM MANIPULATION)
    // ==========================================

    const dashboardContainer = document.getElementById('main-dashboard');
    const modal = document.getElementById('popup-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.getElementById('sidebar');
    const lessonView = document.getElementById('lesson-content');

    // Khởi tạo hệ thống
    function init() {
        renderDashboard();
        renderSidebar();
    }

    // --- Xử lý Dashboard & Modal (Trang chủ) ---[cite: 1]
    function renderDashboard() {
        dashboardData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'dash-card';
            card.innerHTML = `<h3>${item.title}</h3><p style="color: #94a3b8; font-size: 0.9rem;">Nhấn để xem chi tiết...</p>`;
            card.addEventListener('click', () => openModal(item.title, item.content));
            dashboardContainer.appendChild(card);
        });
    }

    function openModal(title, contentHTML) {
        modalTitle.innerText = title;
        modalBody.innerHTML = contentHTML;
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- Xử lý Sidebar & Nội dung bài học (Trang con) ---[cite: 1]
    function renderSidebar() {
        courseStructure.forEach(part => {
            // Tạo Accordion Item
            const accItem = document.createElement('div');
            accItem.className = 'accordion-item';

            // Tạo Header Phần
            const accHeader = document.createElement('div');
            accHeader.className = 'accordion-header';
            accHeader.innerHTML = `<span>${part.title}</span> <i class="fas fa-chevron-down"></i>`;
            
            // Tạo Danh sách bài học
            const accContent = document.createElement('div');
            accContent.className = 'accordion-content';
            
            part.lessons.forEach(lesson => {
                const lessonBtn = document.createElement('div');
                lessonBtn.className = 'lesson-item';
                lessonBtn.innerText = lesson.title;
                lessonBtn.dataset.id = lesson.id;
                
                lessonBtn.addEventListener('click', () => {
                    document.querySelectorAll('.lesson-item').forEach(el => el.classList.remove('active'));
                    lessonBtn.classList.add('active');
                    loadLessonContent(lesson.id, lesson.title);
                });
                
                accContent.appendChild(lessonBtn);
            });

            // Logic đóng mở Accordion
            accHeader.addEventListener('click', () => {
                const isActive = accHeader.classList.contains('active');
                // Đóng tất cả
                document.querySelectorAll('.accordion-header').forEach(el => el.classList.remove('active'));
                document.querySelectorAll('.accordion-content').forEach(el => el.classList.remove('active'));
                
                if (!isActive) {
                    accHeader.classList.add('active');
                    accContent.classList.add('active');
                }
            });

            accItem.appendChild(accHeader);
            accItem.appendChild(accContent);
            sidebar.appendChild(accItem);
        });
    }

    // --- Load động bài học (Dynamic Content + Image + Lab Link) ---[cite: 1]
    function loadLessonContent(id, title) {
        const titleEl = document.getElementById('lesson-title');
        const bodyEl = document.getElementById('lesson-body');
        const imgEl = document.getElementById('lesson-image');
        const labBtn = document.getElementById('lab-btn');

        titleEl.innerText = title;
        bodyEl.innerHTML = lessonContent[id] || "<p>Nội dung đang được cập nhật...</p>";
        
        // Cập nhật đường dẫn ảnh lý thuyết /lythuyet/x.png[cite: 1]
        imgEl.src = `./lythuyet/${id}.png`;
        imgEl.onerror = function() {
            this.src = 'https://via.placeholder.com/800x450?text=Awaiting+Diagram+'+id; // Hiển thị ảnh tạm nếu file lỗi
        };

        // Cập nhật đường dẫn thực hành github /thuchanh/x.html[cite: 1]
        labBtn.href = `./thuchanh/${id}.html`;

        lessonView.classList.remove('hidden');
        
        // Cuộn màn hình nhẹ nhàng tới phần nội dung trên mobile
        lessonView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Kích hoạt
    init();
});