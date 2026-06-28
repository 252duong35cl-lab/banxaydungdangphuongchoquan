// --- DỮ LIỆU 8 CHUYÊN ĐỀ KỸ NĂNG ---
        const SKILLS_DATA = [
            {
                id: 1,
                title: "Kỹ năng đối thoại với Nhân dân",
                objective: "Cung cấp những kiến thức lý luận chung, hình thức tổ chức, và quy trình các bước chuẩn bị đối thoại trực tiếp hoặc đột xuất, tháo gỡ triệt để các băn khoăn khúc mắc từ phía người dân tại địa bàn cơ sở.",
                sections: [
                    {
                        heading: "1. Nhận thức chung & Khái niệm đối thoại",
                        content: "Đối thoại với Nhân dân là kênh thực hiện thông tin hai chiều trực tiếp, nơi người nói và người nghe chủ động 'trao đi đổi lại' một cách công khai. Điều này đóng vai trò then chốt giải quyết tận gốc rễ những băn khoăn, bức xúc của người dân ngay tại cơ sở, tăng cường sự gắn bó mật thiết giữa Đảng, Nhà nước với Nhân dân."
                    },
                    {
                        heading: "2. Chế độ tiếp xúc và hình thức tổ chức đối thoại",
                        content: "<strong>Tiếp xúc đối thoại định kỳ:</strong> Người đứng đầu cấp ủy, chính quyền cấp xã phải tổ chức đối thoại định kỳ ít nhất 2 lần/năm (thường vào tháng 6 và tháng 12 hàng năm). Người đứng đầu cấp huyện đối thoại ít nhất 1 lần/năm.<br><strong>Đối thoại đột xuất:</strong> Tổ chức khi phát sinh vấn đề nóng, hoặc lấy ý kiến đóng góp cho chủ trương mới sắp ban hành.<br><strong>Quy mô tổ chức:</strong> Điểm tiếp xúc cấp xã, thôn, khu phố cần ít nhất 50 người, không nên quá 300 người."
                    },
                    {
                        heading: "3. Kỹ năng cốt lõi trong lúc đối thoại trực tiếp",
                        content: "Người chủ trì cần làm chủ 7 nhóm kỹ năng quan trọng:<br>1. Kỹ năng lắng nghe chăm chú.<br>2. Kỹ năng phản hồi trực quan.<br>3. Kỹ năng diễn giải nội dung ngắn gọn, dễ hiểu.<br>4. Kỹ năng đặt câu hỏi mang tính phản biện cao.<br>5. Kỹ năng trả lời câu hỏi trực diện, tránh hứa suông.<br>6. Kỹ năng im lặng đúng lúc.<br>7. Kỹ năng thương lượng vì lợi ích tối ưu của Nhân dân."
                    },
                    {
                        heading: "4. Quy trình 3 bước tổ chức đối thoại chuyên nghiệp",
                        content: "<strong>Bước 1: Chuẩn bị trước đối thoại:</strong> Thu thập ý kiến dư luận, phân loại theo mức độ khẩn thiết; mời các ban ngành có thẩm quyền; thông báo công khai trước ít nhất 7 ngày.<br><strong>Bước 2: Tiến hành đối thoại:</strong> Chủ trì nêu rõ mục đích, nghe Nhân dân phát biểu; phân công giải trình, trực tiếp trả lời rõ ràng từng vụ việc.<br><strong>Bước 3: Sau khi kết thúc đối thoại:</strong> Chậm nhất 10 ngày phải thông báo kết luận bằng văn bản; chậm nhất 20 ngày các cơ quan có trách nhiệm phải báo cáo kết quả giải quyết cụ thể cho người dân."
                    }
                ]
            },
            {
                id: 2,
                title: "Kỹ năng giao tiếp trong công tác dân vận",
                objective: "Nâng cao tác phong hành chính - công vụ chuyên nghiệp, rèn luyện kỹ thuật giao tiếp trực tiếp và gián tiếp gần dân, trọng dân, tôn trọng bản sắc văn hóa vùng miền của Nhân dân.",
                sections: [
                    {
                        heading: "1. Bản chất giao tiếp công vụ trong dân vận chính quyền",
                        content: "Mối tương tác giữa cán bộ công chức với người dân thuộc loại giao tiếp chức năng (giao tiếp công vụ). Kiểu thức giao tiếp này bị chi phối chặt chẽ bởi các quy định do tổ chức đề ra nhưng đòi hỏi cái tâm hòa nhã, lịch thiệp, hướng tới phục vụ lợi ích chính đáng của quần chúng Nhân dân."
                    },
                    {
                        heading: "2. Kỹ thuật vàng khởi đầu giao tiếp: 'See - Smile - Greet'",
                        content: "Tại công sở tiếp công dân, luôn áp dụng quy tắc <strong>'NHÌN - CƯỜI - CHÀO'</strong> ngay khi gặp người dân. Cử chỉ này thể hiện thái độ niềm nở, sẵn sàng phục vụ, xua tan khoảng cách quyền lực. Hãy đặt các câu hỏi mở thân thiện. Tránh tuyệt đối thái độ lạnh lùng, giọng nói hất đầu cộc lốc trống không như: 'Có việc gì không?', 'Giấy tờ đâu đưa đây coi?'."
                    },
                    {
                        heading: "3. Thấu hiểu qua kỹ năng giải mã ngôn ngữ phi ngôn từ",
                        content: "Quan sát tinh tế nhịp thở (tiếng thở dài), nét mặt và ánh mắt của công dân để phán đoán trạng thái tâm lý (e ngại, lo sợ, hay đang rất nóng giận). Khi người dân khoanh tay hoặc đan bàn tay chặt, họ đang có xu hướng khép kín. Người cán bộ cần chủ động điều chỉnh chiến lược giao tiếp để tạo môi trường cởi mở, giải tỏa cảm xúc của họ."
                    },
                    {
                        heading: "4. Quy tắc giao tiếp gián tiếp qua điện thoại",
                        content: "Áp dụng nghiêm ngặt nguyên tắc <strong>4 CÓ & 4 KHÔNG</strong>:<br><strong>Có:</strong> Chào hỏi ban đầu; Xác định nghe; Cảm ơn; Chào kết thúc.<br><strong>Không:</strong> Để người dân chờ lâu; Hỏi vặn với giọng gắt gỏng; Nói 'Không biết'; Cố tranh cãi với người dân."
                    }
                ]
            },
            {
                id: 3,
                title: "Kỹ năng hòa giải ở cơ sở",
                objective: "Hướng dẫn thực hiện đúng quy định pháp luật và vận dụng chuẩn mực đạo đức, phong tục địa phương để giải quyết êm đẹp các mâu thuẫn tranh chấp dân sự, hôn nhân gia đình.",
                sections: [
                    {
                        heading: "1. Phạm vi được phép tiến hành hòa giải",
                        content: "Hòa giải viên tiến hành hòa giải các mâu thuẫn, tranh chấp phát sinh từ: Quan hệ dân sự (sử dụng điện nước chung, ranh giới lối đi chung, thừa kế); quan hệ hôn nhân gia đình (vợ chồng bất hòa, nuôi con, ly hôn, cấp dưỡng); vi phạm pháp luật chưa đến mức bị truy cứu hình sự hoặc xử phạt hành chính."
                    },
                    {
                        heading: "2. Các trường hợp tuyệt đối KHÔNG hòa giải",
                        content: "Hòa giải viên không được tiến hành hòa giải các trường hợp:<br>— Xâm phạm lợi ích của Nhà nước, lợi ích công cộng.<br>— Vi phạm điều cấm của pháp luật hoặc trái đạo đức xã hội (như mua bán ma túy, mại dâm).<br>— Vi phạm pháp luật hình sự, hành chính (trừ một số vụ án ít nghiêm trọng được đình chỉ điều tra hoặc chỉ khởi tố theo yêu cầu người bị hại nhưng người bị hại tự nguyện rút đơn)."
                    },
                    {
                        heading: "3. 6 Nguyên tắc thép trong hòa giải ở cơ sở",
                        content: "1. Tôn trọng sự tự nguyện của các bên; tuyệt đối không áp đặt, bắt buộc.<br>2. Bảo đảm phù hợp chính sách, pháp luật, đạo đức xã hội và phong tục tập quán tốt đẹp.<br>3. Khách quan, công bằng, kịp thời, có lý, có tình.<br>4. Giữ bí mật thông tin đời tư của các bên.<br>5. Bảo đảm bình đẳng giới trong tổ chức và hoạt động (Tổ hòa giải từ 3 thành viên trở lên bắt buộc phải có hòa giải viên nữ).<br>6. Không lợi dụng hòa giải để ngăn cản các bên bảo vệ quyền lợi hợp pháp của mình."
                    },
                    {
                        heading: "4. Các bước tiến hành một buổi hòa giải thành công",
                        content: "<strong>Bước 1: Chuẩn bị:</strong> Nghiên cứu tài liệu pháp lý liên quan; gặp gỡ đối tượng để lắng nghe tâm tư.<br><strong>Bước 2: Tiến hành:</strong> Giới thiệu lý do, để các bên trình bày, khơi gợi tình cảm hàng xóm láng giềng; gợi mở phương án hòa giải đôi bên cùng có lợi; lập văn bản hòa giải thành.<br><strong>Bước 3: Sau hòa giải:</strong> Theo dõi, đôn đốc các bên thực hiện thỏa thuận; ghi sổ theo dõi."
                    }
                ]
            },
            {
                id: 4,
                title: "Kỹ năng nắm bắt và nghiên cứu dư luận xã hội",
                objective: "Trang bị phương pháp khoa học để kịp thời thu thập, sàng lọc ý kiến phản ánh của các tầng lớp nhân dân, từ đó tham mưu cho chính quyền đưa ra các quyết sách sát hợp thực tiễn.",
                sections: [
                    {
                        heading: "1. Khái niệm dư luận xã hội và tin đồn",
                        content: "<strong>Dư luận xã hội:</strong> Là sự phán xét, đánh giá công khai thể hiện thái độ của nhóm xã hội đối với vấn đề thời sự liên quan đến lợi ích của họ; phản ánh trung thực sự việc có thật.<br><strong>Tin đồn:</strong> Là thông tin không rõ nguồn gốc, truyền tai nhau và chưa được xác thực, có xu hướng càng lan truyền xa càng bị bóp méo, thêm thắt sai sự thật."
                    },
                    {
                        heading: "2. 6 Phương pháp thu thập dư luận xã hội",
                        content: "— <strong>Phương pháp quan sát:</strong> Lắng nghe trực tiếp tại hiện trường.<br>— <strong>Phỏng vấn sâu:</strong> Gặp gỡ nói chuyện trực tiếp phi cấu trúc hoặc bán cấu trúc.<br>— <strong>Thảo luận nhóm tập trung:</strong> Gom từ 6-12 người có cùng đặc điểm để lấy ý kiến sâu sắc.<br>— <strong>Nghiên cứu thông tin đại chúng:</strong> Sàng lọc dư luận trên báo chí, mạng xã hội.<br>— <strong>Nắm bắt qua cộng tác viên:</strong> Xây dựng mạng lưới 'tai mắt' tin cậy tại cộng đồng.<br>— <strong>Điều tra bảng hỏi:</strong> Phát phiếu thăm dò dư luận bằng giấy hoặc email, điện thoại."
                    },
                    {
                        heading: "3. Định hướng dư luận xã hội",
                        content: "Để điều chỉnh các luồng dư luận lệch lạc, cán bộ cần:<br>— Định hướng thông qua người có uy tín (nhà khoa học, già làng, trưởng họ, chức sắc tôn giáo).<br>— Định hướng qua sinh hoạt, hội họp của MTTQ, các tổ chức đoàn thể chính trị.<br>— Định hướng thông qua báo chí, truyền thông chính thống.<br>— Định hướng bằng cách tác động trực tiếp vào nhận thức: Cung cấp thông tin chính thống, công khai, kịp thời để dập tắt tin đồn thất thiệt."
                    }
                ]
            },
            {
                id: 5,
                title: "Kỹ năng thu thập và xử lý thông tin",
                objective: "Nâng cao năng lực phân tích dữ liệu, đối chiếu chọn lọc nguồn thông tin sơ cấp và thứ cấp để phục vụ tối ưu cho quá trình ra quyết định hành chính.",
                sections: [
                    {
                        heading: "1. Thu thập thông tin qua nguồn thứ cấp",
                        content: "Nguồn thứ cấp bao gồm hồ sơ, tài liệu sẵn có, văn bản pháp lý, báo cáo thống kê dân số, đất đai của địa phương. Cán bộ cần nghiên cứu kỹ để nắm rõ bối cảnh lịch sử của vụ việc, bảo đảm tính pháp lý trước khi xử lý."
                    },
                    {
                        heading: "2. Thu thập thông tin qua nguồn sơ cấp",
                        content: "Nguồn sơ cấp được thu thập trực tiếp bằng phương pháp quan sát (quan sát tham dự hoặc không tham dự, quan sát bí mật), phỏng vấn sâu trực tiếp người trong cuộc, thảo luận nhóm hoặc khảo sát bằng bảng hỏi định lượng chuẩn hóa."
                    },
                    {
                        heading: "3. Kỹ năng xử lý thông tin",
                        content: "<strong>Xử lý tức thời:</strong> Đòi hỏi cán bộ nhanh chóng phân loại thông tin thu nhận trực tiếp, đối chiếu tức khắc với hệ thống quy định pháp luật để đưa ra câu trả lời thuyết phục ngay tại chỗ.<br><strong>Xử lý theo quy trình:</strong> Phân loại thông tin thành định tính và định lượng. Áp dụng các phần mềm công nghệ thông tin hỗ trợ sắp xếp mã hóa dữ liệu. Đảm bảo thông tin đạt 5 yêu cầu: <i>Đúng - Đủ - Kịp thời - Gắn với diễn biến sự việc - Sử dụng được.</i>"
                    }
                ]
            },
            {
                id: 6,
                title: "Kỹ năng tư vấn chính sách, pháp luật",
                objective: "Hướng dẫn thực hiện trợ giúp pháp lý miễn phí, đưa các chủ trương chính sách của Đảng và pháp luật đi sâu vào đời sống, bảo vệ quyền lợi hợp pháp cho Nhân dân.",
                sections: [
                    {
                        heading: "1. Bản chất & Mục đích của tư vấn pháp luật",
                        content: "Tư vấn chính sách, pháp luật ở cơ sở là hình thức cung cấp dịch vụ giải đáp, hướng dẫn người dân xử sự đúng pháp luật một cách miễn phí. Việc này giúp nâng cao nhận thức, giảm thiểu các khiếu nại, tranh chấp kéo dài do thiếu hiểu biết pháp lý gây ra."
                    },
                    {
                        heading: "2. Phân loại hình thức tư vấn",
                        content: "<strong>Tư vấn bằng lời nói trực tiếp:</strong> Áp dụng cho các vụ việc đơn giản, yêu cầu người tư vấn có phản ứng nhanh, kiến thức rộng và kỹ năng đối thoại lưu loát.<br><strong>Tư vấn bằng văn bản:</strong> Áp dụng cho các vụ việc phức tạp, cần tra cứu kỹ luật. Văn bản tư vấn phải có cấu trúc logic rõ ràng: Nêu yêu cầu -> Đưa ra căn cứ pháp lý trả lời cụ thể -> Hướng dẫn cách xử sự đúng pháp luật."
                    },
                    {
                        heading: "3. Quy trình 4 bước tư vấn chuẩn chỉnh",
                        content: "<strong>Bước 1: Tiếp nhận yêu cầu:</strong> Chân thành lắng nghe, ghi chép đầy đủ các mốc sự kiện; tóm lược lại bản chất sự việc để thống nhất với người dân.<br><strong>Bước 2: Tra cứu tài liệu:</strong> Tìm kiếm chính xác các điều luật, quy định còn hiệu lực liên quan.<br><strong>Bước 3: Xác minh làm rõ:</strong> Yêu cầu người dân giải thích thêm hoặc gặp gỡ các cơ quan chức năng để kiểm chứng thông tin đa chiều.<br><strong>Bước 4: Giải đáp và hướng dẫn giải pháp:</strong> Đưa ra các giải pháp hướng dẫn lựa chọn (không quyết định thay), phân tích ưu nhược điểm từng giải pháp trên tinh thần tuân thủ pháp luật."
                    }
                ]
            },
            {
                id: 7,
                title: "Kỹ năng vận động, tuyên truyền, thuyết phục và lắng nghe",
                objective: "Chuyển giao các phương pháp truyền cảm hứng, xây dựng đề cương tuyên truyền súc tích, điều tiết giọng nói và cử chỉ để lôi cuốn người nghe.",
                sections: [
                    {
                        heading: "1. Nguyên tắc lựa chọn nội dung tuyên truyền",
                        content: "Nội dung tuyên truyền, vận động quần chúng phải đảm bảo 4 tiêu chí cốt lõi: <i>Phải mang tính thời sự, cấp thiết; phải thiết thực, đáp ứng đúng nhu cầu thông tin của đối tượng; phải mang đến thông tin mới lạ; phải đảm bảo tính tư tưởng và tính chiến đấu.</i>"
                    },
                    {
                        heading: "2. Cấu trúc chuẩn của một đề cương tuyên truyền",
                        content: "— <strong>Phần mở đầu:</strong> Nhập đề tự nhiên bằng cách trực tiếp hoặc gián tiếp, kích thích sự hứng thú và tập trung của người nghe.<br>— <strong>Phần chính:</strong> Bố cục chặt chẽ, kết hợp lý lẽ sắc bén và dẫn chứng cụ thể; chuyển tiếp mạch lạc giữa các ý; áp dụng phương pháp quy nạp hoặc diễn dịch.<br>— <strong>Phần kết luận:</strong> Tóm tắt cô đọng, giàu cảm xúc, đưa ra thông điệp hành động rõ ràng."
                    },
                    {
                        heading: "3. Kỹ thuật trình bày & Trả lời câu hỏi",
                        content: "Điều khiển ngữ điệu, âm lượng, nhịp độ giọng nói nhịp nhàng; ứng dụng ngôn ngữ cơ thể (ánh mắt, nụ cười gần gũi). Khi trả lời câu hỏi phản biện từ phía người nghe, hãy luôn điềm tĩnh, cầu thị, tôn trọng quần chúng; tuyệt đối không nóng nảy, tranh cãi gay gắt."
                    },
                    {
                        heading: "4. Kỹ năng lắng nghe thấu cảm & các lỗi cần tránh",
                        content: "Lắng nghe là cuộc giao tiếp hai chiều, là nền tảng tạo dựng lòng tin bền vững của Nhân dân. <strong>Tránh các lỗi nghiêm trọng sau trong khi lắng nghe:</strong> Ngắt lời người dân; chỉ tập trung bảo vệ cái tôi cá nhân; không đặt mình vào vị trí của người dân để đồng cảm; lắng nghe kiểu 'phòng thủ' (chỉ canh chừng sơ hở để phản bác)."
                    }
                ]
            },
            {
                id: 8,
                title: "Kỹ năng xử lý tình huống của cán bộ cơ sở",
                objective: "Quy trình hóa các bước phát hiện, phân tích nguyên nhân và thiết lập kế hoạch giải quyết các điểm nóng, mâu thuẫn xã hội phát sinh đột xuất ở địa phương.",
                sections: [
                    {
                        heading: "1. Bản chất & Phân loại tình huống",
                        content: "Tình huống là sự việc không bình thường, diễn ra ngoài ý muốn chủ quan, gây bất lợi cho hoạt động lãnh đạo quản lý và quyền lợi của người dân. Tình huống bao gồm: Tình huống trong xây dựng Đảng; tình huống trong quản lý hành chính; tình huống trong hoạt động của MTTQ & đoàn thể; tình huống an ninh trật tự."
                    },
                    {
                        heading: "2. Quy trình 5 bước xử lý tình huống chuẩn mực",
                        content: "<strong>Bước 1: Nhận dạng tình huống:</strong> Xác định tính chất, quy mô, thẩm quyền giải quyết.<br><strong>Bước 2: Thu thập, xử lý thông tin:</strong> Thu thập thông tin đa chiều để xác định đúng nguyên nhân cốt lõi (khách quan, chủ quan, trực tiếp, sâu xa).<br><strong>Bước 3: Xây dựng các phương án giải quyết:</strong> Thiết lập ít nhất 2 phương án (phương án vận động, hành chính, kinh tế) và phân tích ưu khuyết điểm của từng phương án để chọn tối ưu.<br><strong>Bước 4: Tổ chức thực hiện:</strong> Phân công trách nhiệm rõ ràng cho các bên; có phương án dự phòng khống chế tình huống chuyển biến xấu.<br><strong>Bước 5: Kiểm tra, rút kinh nghiệm:</strong> Đánh giá hiệu quả xử lý, xem xét sửa đổi chính sách bất cập và xử lý nghiêm đối tượng sai phạm."
                    },
                    {
                        heading: "3. Nguyên tắc bất di bất dịch trong xử lý tình huống",
                        content: "— Phải đảm bảo tính Đảng (đúng chủ trương, mục tiêu).<br>— Phải đảm bảo tính pháp lý (căn cứ theo Hiến pháp và pháp luật).<br>— Phải bảo đảm lợi ích chung của Nhân dân.<br>— Phải đảm bảo tính công khai, minh bạch ('Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng')."
                    }
                ]
            }
        ];

        // --- DỮ LIỆU TÌNH HUỐNG NHẬP VAI ---
        const SCENARIOS_DATA = [
            {
                id: "sc1",
                title: "Tình huống 1: Người dân lớn tiếng, bức xúc tại công sở",
                description: "Ông Nguyễn Văn B. đến bộ phận Một cửa để hỏi về hồ sơ đất đai bị trễ hẹn 3 tuần. Do bị nhân viên trước đó giải thích hời hợt, ông đang rất nóng giận, đập bàn và nói lớn tiếng gây ồn ào công sở.",
                steps: [
                    {
                        text: "<strong>Bước 1: Tiếp cận ban đầu.</strong> Bạn là cán bộ dân vận trực hôm đó. Ông B. đang giận dữ gào thét. Bạn xử lý thế nào?",
                        choices: [
                            {
                                text: "A. Yêu cầu bảo vệ trục xuất ông B. ra ngoài vì gây rối trật tự công cộng.",
                                points: 10,
                                feedback: "Sai lầm nghiêm trọng! Cách làm này mang tính chất cửa quyền, đẩy người dân vào thế đối đầu, khiến mâu thuẫn bùng phát lớn hơn, vi phạm đạo đức công vụ."
                            },
                            {
                                text: "B. Lập tức quát lại ông B: 'Đề nghị ông trật tự! Đây là cơ quan nhà nước, muốn gì thì xếp hàng và nói chuyện lịch sự!'.",
                                points: 30,
                                feedback: "Chưa đạt yêu cầu. Việc cán bộ nóng nảy quát lại người dân chỉ làm gia tăng căng thẳng, chứng tỏ sự thiếu kiềm chế cảm xúc trong giao tiếp công vụ."
                            },
                            {
                                text: "C. Mỉm cười lịch sự, mời ông B. vào phòng tiếp dân riêng. Rót một ly nước ấm, lắng nghe ông trút bầu tâm sự mà không ngắt lời.",
                                points: 100,
                                feedback: "Tuyệt vời! Bạn đã áp dụng chuẩn kỹ năng giao tiếp 'See - Smile - Greet', đồng thời sử dụng kỹ năng định vị, đặt mình vào vị trí bức xúc của người dân để hỗ trợ tâm lý ban đầu."
                            }
                        ]
                    },
                    {
                        text: "<strong>Bước 2: Tìm hiểu bản chất sự việc.</strong> Ông B. đã bình tĩnh hơn đôi chút sau khi uống nước. Ông giải thích hồ sơ chuyển nhượng đất của gia đình bị ngâm quá hạn mà không ai giải thích lý do. Bạn làm gì?",
                        choices: [
                            {
                                text: "A. Nói: 'Hồ sơ đất đai của ông do phòng ban khác làm, tôi không biết. Đề nghị ông về chờ khi nào có kết quả họ gửi'.",
                                points: 20,
                                feedback: "Cách trả lời thờ ơ, vi phạm nghiêm trọng nguyên tắc phục vụ Nhân dân. Làm mất lòng tin của người dân vào chính quyền cơ sở."
                            },
                            {
                                text: "B. Đề nghị ông B. cung cấp phiếu hẹn, lập tức tra cứu trên phần mềm một cửa, phát hiện hồ sơ bị kẹt tại Văn phòng đăng ký đất đai do thiếu một văn bản xác nhận nguồn gốc cũ. Bạn giải thích cặn kẽ quy trình và nhận khuyết điểm vì sự chậm trễ giải thích.",
                                points: 100,
                                feedback: "Tuyệt vời! Bạn đã áp dụng xuất sắc kỹ năng thu thập xử lý thông tin định lượng tức thời và chủ động nhận trách nhiệm trước Nhân dân."
                            },
                            {
                                text: "C. Ghi nhận ý kiến, hứa sẽ báo cáo lãnh đạo giải quyết sau, đề nghị ông B. viết đơn khiếu nại gửi lên Chủ tịch UBND.",
                                points: 50,
                                feedback: "Cách giải quyết mang tính chất 'đẩy việc', khiến quy trình giải quyết kéo dài không cần thiết và người dân vẫn cảm thấy không được hỗ trợ kịp thời."
                            }
                        ]
                    },
                    {
                        text: "<strong>Bước 3: Giải quyết dứt điểm.</strong> Để giải quyết trọn vẹn bức xúc của ông B., giải pháp tối ưu cuối cùng của bạn là gì?",
                        choices: [
                            {
                                text: "A. Chỉ đường cho ông B. tự lên trực tiếp Văn phòng đăng ký đất đai cấp quận để hỏi.",
                                points: 30,
                                feedback: "Không đạt yêu cầu. Người dân sẽ cảm thấy bị 'hành' và xoay như chong chóng giữa các cơ quan hành chính."
                            },
                            {
                                text: "B. Đưa phiếu hẹn mới, hứa 1 tuần nữa sẽ có kết quả nhưng không chủ động đeo bám hỗ trợ.",
                                points: 60,
                                feedback: "Mức độ trung bình. Lời hứa cần đi đôi với hành động và sự liên kết chặt chẽ giữa các phòng ban để hỗ trợ thực chất."
                            },
                            {
                                text: "C. Viết giấy hướng dẫn chi tiết các giấy tờ cần bổ sung, trực tiếp liên hệ điện thoại với cán bộ thụ lý hồ sơ cấp quận để đẩy nhanh tiến độ; trao số điện thoại cá nhân của bạn để ông B. tiện liên hệ giám sát tiến độ.",
                                points: 100,
                                feedback: "Dân vận khéo xuất sắc! Bạn đã thực hiện đúng tinh thần trách nhiệm với dân, tạo sự tin cậy tuyệt đối, chuyển người dân từ thế bức xúc sang đồng thuận, biết ơn."
                            }
                        ]
                    }
                ]
            },
            {
                id: "sc2",
                title: "Tình huống 2: Hòa giải mâu thuẫn ranh giới đất",
                description: "Hộ gia đình ông A. và hộ gia đình ông B. là hai hàng xóm sát vách, phát sinh mâu thuẫn gay gắt tranh chấp khoảng không 20cm ranh giới để xây tường rào mới. Hai bên đã xảy ra cự cãi, suýt dùng vũ lực.",
                steps: [
                    {
                        text: "<strong>Bước 1: Chuẩn bị hòa giải.</strong> Với vai trò Tổ trưởng Tổ hòa giải cơ sở, bạn thực hiện bước chuẩn bị nào đầu tiên?",
                        choices: [
                            {
                                text: "A. Yêu cầu hai bên nộp đơn kiện ra Tòa án quận giải quyết vì đây là tranh chấp đất đai phức tạp.",
                                points: 20,
                                feedback: "Đẩy việc quá sớm. Hòa giải ở cơ sở có vai trò ngăn ngừa mâu thuẫn nhỏ bùng phát thành vụ án hình sự. Bạn cần cố gắng hòa giải trước."
                            },
                            {
                                text: "B. Lập tức tập hợp lực lượng dân phòng xuống hiện trường, bắt hai bên ký biên bản giữ nguyên hiện trạng.",
                                points: 50,
                                feedback: "Biện pháp hành chính quá cứng nhắc, chưa khơi gợi được sự tự nguyện của các bên theo nguyên tắc hòa giải."
                            },
                            {
                                text: "C. Chủ động gặp riêng từng hộ gia đình, lắng nghe tâm tư của họ, đề nghị họ cung cấp giấy chứng nhận QSDĐ cũ để đối chiếu kiểm tra thực địa cùng địa chính phường.",
                                points: 100,
                                feedback: "Xuất sắc! Bạn đã tuân thủ đúng bước 1 của quy trình hòa giải: Tiếp cận đối tượng để thu thập thông tin và hồ sơ pháp lý khách quan."
                            }
                        ]
                    },
                    {
                        text: "<strong>Bước 2: Tổ chức buổi hòa giải.</strong> Bạn mời những ai tham gia và dẫn dắt buổi hòa giải như thế nào?",
                        choices: [
                            {
                                text: "A. Chỉ mời ông A và ông B đến phòng làm việc của UBND phường để cán bộ tư pháp tuyên đọc quyết định xử lý.",
                                points: 40,
                                feedback: "Chưa đạt yêu cầu. Hòa giải ở cơ sở không phải là phiên tòa phán quyết mà là hướng dẫn hai bên tự thỏa thuận ôn hòa."
                            },
                            {
                                text: "B. Tổ chức hòa giải tại nhà văn hóa khu phố; mời hai bên gia đình, trưởng ban điều hành khu phố, địa chính phường, và một cụ cao tuổi có uy tín lớn trong dòng họ của một bên tham gia.",
                                points: 100,
                                feedback: "Quá giỏi! Việc kết hợp cán bộ chuyên môn (địa chính) bảo đảm tính pháp lý và người có uy tín lớn tại địa phương giúp tác động sâu sắc về mặt tình cảm 'tối lửa tắt đèn có nhau'."
                            },
                            {
                                text: "C. Để hai bên tự cãi lý tại cuộc họp, bên nào đuối lý hơn thì bạn khuyên nhượng bộ bên kia.",
                                points: 30,
                                feedback: "Sai lầm. Người chủ trì phải điều hành, kiểm soát cuộc họp, không được để hai bên cự cãi mất kiểm soát hoặc thiên vị làm mất tính công bằng."
                            }
                        ]
                    },
                    {
                        text: "<strong>Bước 3: Đưa ra phương án hòa giải cuối cùng.</strong> Bản vẽ địa chính cho thấy ranh giới chồng lấn 20cm là do sai sót đo đạc cũ, không rõ ràng thuộc về ai. Bạn thuyết phục thế nào?",
                        choices: [
                            {
                                text: "A. Yêu cầu chia đôi ranh giới tranh chấp (mỗi bên hưởng 10cm), nếu không đồng ý thì đình chỉ xây dựng tường rào mãi mãi.",
                                points: 50,
                                feedback: "Áp đặt hành chính, vi phạm nguyên tắc tự nguyện và tôn trọng quyền định đoạt của các bên."
                            },
                            {
                                text: "B. Tuyên truyền luật đất đai, khơi gợi tình cảm hàng xóm tối lửa tắt đèn có nhau; phân tích rủi ro chi phí kiện tụng kéo dài; đề xuất phương án xây chung bức tường rào dày 20cm trên chính ranh giới chồng lấn đó, cả hai bên cùng sử dụng làm tường rào chung bảo vệ.",
                                points: 100,
                                feedback: "Đỉnh cao dân vận khéo! Phương án xây tường rào chung là giải pháp 'đôi bên cùng có lợi' (Win-Win), hóa giải triệt để mâu thuẫn ranh giới bằng sự gắn kết chung."
                            },
                            {
                                text: "C. Để mặc hai bên tự thương lượng, khi nào họ thống nhất thì lên phường ký biên bản.",
                                points: 30,
                                feedback: "Thờ ơ, thiếu tinh thần trách nhiệm của người cán bộ dân vận hòa giải ở cơ sở."
                            }
                        ]
                    }
                ]
            }
        ];

        // --- DỮ LIỆU CÂU HỎI TRẮC NGHIỆM (QUIZ) ---
        const QUIZ_QUESTIONS = [
            {
                q: "1. Ai là người chịu trách nhiệm chính phụ trách công tác dân vận của chính quyền tại địa phương cơ sở theo Quyết định số 784-QĐ/TU?",
                options: [
                    "A. Trưởng Công an phường, xã, thị trấn.",
                    "B. Chủ tịch Ủy ban nhân dân cấp tương ứng.",
                    "C. Bí thư Đoàn Thanh niên cấp cơ sở.",
                    "D. Trưởng phòng Tư pháp huyện."
                ],
                correct: 1,
                exp: "Giải thích: Theo Điều 30 Quyết định số 784-QĐ/TU của Ban Thường vụ Thành ủy, Chủ tịch UBND các cấp phụ trách công tác dân vận và chỉ đạo thực hiện các quy chế thực hiện dân chủ ở cơ sở."
            },
            {
                q: "2. Phương châm chuẩn mực thể hiện tinh thần phục vụ Nhân dân của cán bộ dân vận trong Sổ tay là gì?",
                options: [
                    "A. 'Yêu dân, vì dân, lắng nghe ý kiến đóng góp của dân'.",
                    "B. 'Trọng dân, gần dân, hiểu dân, học dân và trách nhiệm với dân'.",
                    "C. 'Dân biết, dân bàn, dân làm, dân kiểm tra toàn bộ hoạt động'.",
                    "D. 'Lắng nghe ý kiến của Nhân dân và thực thi công vụ nghiêm minh'."
                ],
                correct: 1,
                exp: "Giải thích: Sổ tay khẳng định tác phong cốt lõi của người cán bộ là: 'Trọng dân, gần dân, hiểu dân, học dân và trách nhiệm với Nhân dân' gắn liền với phương châm 'Nghe dân nói, nói dân hiểu, làm dân tin'."
            },
            {
                q: "3. Theo quy định, người đứng đầu cấp ủy, chính quyền cấp xã, thị trấn phải tiếp xúc, đối thoại định kỳ với Nhân dân bao nhiêu lần một năm?",
                options: [
                    "A. Ít nhất 1 lần/năm.",
                    "B. Ít nhất 2 lần/năm.",
                    "C. Ít nhất 3 lần/năm.",
                    "D. Chỉ tổ chức khi có vụ việc đột xuất phát sinh."
                ],
                correct: 1,
                exp: "Giải thích: Người đứng đầu cấp ủy, chính quyền, tổ chức cấp xã, thị trấn phải tiếp xúc đối thoại định kỳ với MTTQ, các đoàn thể và Nhân dân định kỳ ít nhất 2 lần/năm (thời điểm tháng 6 và tháng 12 hàng năm)."
            },
            {
                q: "4. Kỹ thuật khởi đầu giao tiếp tại công sở tiếp công dân gồm 3 hành động phối hợp liên hoàn nào?",
                options: [
                    "A. Hỏi - Ghi chép - Trả lời phiếu hẹn.",
                    "B. Nhìn - Cười - Chào (See - Smile - Greet).",
                    "C. Đứng lên - Mời ngồi - Rót nước.",
                    "D. Nhận hồ sơ - Đọc quy trình - Hẹn ngày trả."
                ],
                correct: 1,
                exp: "Giải thích: Kỹ thuật 'NHÌN - CƯỜI - CHÀO' phối hợp liên hoàn giúp tạo lập ấn tượng ban đầu tốt đẹp, thể hiện sự gần gũi, tôn trọng và làm dịu căng thẳng của công dân khi đến cơ quan nhà nước."
            },
            {
                q: "5. Hoạt động hòa giải ở cơ sở KHÔNG được tiến hành trong trường hợp nào?",
                options: [
                    "A. Mâu thuẫn tranh chấp ranh giới lối đi chung.",
                    "B. Tranh chấp ly hôn, nuôi con, yêu cầu cấp dưỡng.",
                    "C. Mâu thuẫn xâm phạm lợi ích của Nhà nước, lợi ích công cộng.",
                    "D. Vi phạm pháp luật chưa đến mức bị xử lý hành chính."
                ],
                correct: 2,
                exp: "Giải thích: Theo Điều 5 Nghị định số 15/2014/NĐ-CP, mâu thuẫn tranh chấp xâm phạm lợi ích của Nhà nước, lợi ích công cộng là trường hợp cấm không được tiến hành hòa giải ở cơ sở."
            },
            {
                q: "6. Pháp luật quy định cơ cấu tối thiểu của một Tổ hòa giải ở cơ sở như thế nào?",
                options: [
                    "A. Có từ 3 hòa giải viên trở lên, trong đó bắt buộc phải có hòa giải viên nữ.",
                    "B. Phải có ít nhất 5 thành viên gồm đại diện MTTQ và Công an.",
                    "C. Chỉ cần có Tổ trưởng tổ dân phố đứng ra chủ trì.",
                    "D. Có từ 2 thành viên trở lên, không giới hạn giới tính."
                ],
                correct: 0,
                exp: "Giải thích: Để bảo đảm bình đẳng giới và tính hiệu quả, pháp luật quy định mỗi tổ hòa giải phải có từ 3 hòa giải viên trở lên, trong đó bắt buộc phải có hòa giải viên nữ."
            },
            {
                q: "7. Sự khác biệt căn bản về xu hướng biến đổi giữa 'Dư luận xã hội' và 'Tin đồn' là gì?",
                options: [
                    "A. Tin đồn luôn chính xác hơn dư luận xã hội.",
                    "B. Dư luận xã hội càng loang xa càng nhiều dị bản; tin đồn thì luôn thống nhất.",
                    "C. Tin đồn càng loang xa càng nhiều biến thể, dị bản; dư luận xã hội thông qua thảo luận công khai thì tính thống nhất ngày càng tăng lên.",
                    "D. Cả hai hiện tượng đều biến đổi giống hệt nhau theo thời gian."
                ],
                correct: 2,
                exp: "Giải thích: Tin đồn là thông tin thất thiệt không rõ nguồn gốc, càng loang xa càng bị tam sao thất bản. Còn dư luận xã hội được hình thành qua thảo luận công khai nên tính thống nhất ngày càng tăng lên."
            },
            {
                q: "8. Có mấy bước cơ bản trong Quy trình xử lý tình huống bất lợi của cán bộ phường, xã, thị trấn?",
                options: [
                    "A. 3 bước.",
                    "B. 4 bước.",
                    "C. 5 bước.",
                    "D. 6 bước."
                ],
                correct: 2,
                exp: "Giải thích: Quy trình gồm 5 bước: Bước 1: Nhận dạng tình huống -> Bước 2: Thu thập xử lý thông tin -> Bước 3: Xây dựng các phương án -> Bước 4: Tổ chức thực hiện -> Bước 5: Kiểm tra, đánh giá."
            },
            {
                q: "9. Phương châm đầy đủ của việc thực hiện Dân chủ ở cơ sở theo Luật mới hiện nay là gì?",
                options: [
                    "A. 'Dân biết, dân bàn, dân làm, dân kiểm tra'.",
                    "B. 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát'.",
                    "C. 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.",
                    "D. 'Dân biết, dân bàn, dân làm, dân quyết định, dân thụ hưởng'."
                ],
                correct: 2,
                exp: "Giải thích: Phương châm dân chủ ở cơ sở hiện nay đã được hoàn thiện toàn diện: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'."
            },
            {
                q: "10. Yếu tố nào được Sổ tay nhận định là có giá trị phản biện cao nhất trong một cuộc đối thoại trực tiếp?",
                options: [
                    "A. Kỹ năng lắng nghe thấu cảm.",
                    "B. Kỹ năng im lặng đúng lúc.",
                    "C. Kỹ năng đặt câu hỏi.",
                    "D. Kỹ năng diễn giải nội dung."
                ],
                correct: 2,
                exp: "Giải thích: Trong 7 kỹ năng đối thoại, Sổ tay nêu rõ: 'Kỹ năng đặt câu hỏi là có giá trị phản biện cao nhất trong cuộc đối thoại'."
            }
        ];

        // --- ĐIỀU KHIỂN ROUTING / TABS KHÔNG REFRESH ---
        function switchTab(tabId) {
            // Hide all tab views
            document.querySelectorAll('main > section').forEach(section => {
                section.classList.add('hidden');
            });
            // Show selected tab view
            document.getElementById(`tab-${tabId}`).classList.remove('hidden');

            // Reset tab button styles
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.className = "tab-btn inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition duration-150 ease-in-out text-slate-600 hover:bg-slate-50 hover:text-slate-900";
            });
            // Highlight active tab button
            const activeBtn = document.getElementById(`btn-tab-${tabId}`);
            if (activeBtn) {
                activeBtn.className = "tab-btn inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-bold transition duration-150 ease-in-out bg-red-50 text-red-700 border border-red-100";
            }

            // Custom init behaviors
            if (tabId === 'skills') {
                renderSkillMenu();
            } else if (tabId === 'scenarios') {
                renderScenarios();
            } else if (tabId === 'search') {
                handleSearch();
            }
            
            // Auto scroll to top of view
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- ĐIỀU KHIỂN PHẦN CẨM NANG 8 KỸ NĂNG ---
        let currentSkillId = 1;
        function renderSkillMenu() {
            const menuContainer = document.getElementById('skill-menu-list');
            menuContainer.innerHTML = '';
            SKILLS_DATA.forEach(skill => {
                const isActive = skill.id === currentSkillId;
                const btn = document.createElement('button');
                btn.onclick = () => { currentSkillId = skill.id; renderSkillMenu(); };
                btn.className = `w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition ${isActive ? 'bg-red-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`;
                btn.innerHTML = `
                    <div class="flex items-center justify-between">
                        <span>Chuyên đề ${skill.id}: ${skill.title.replace('Kỹ năng ', '')}</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                `;
                menuContainer.appendChild(btn);
            });

            renderSkillDetail();
        }

        function renderSkillDetail() {
            const detailPanel = document.getElementById('skill-detail-panel');
            const skill = SKILLS_DATA.find(s => s.id === currentSkillId);
            if (!skill) return;

            let sectionsHtml = '';
            skill.sections.forEach(sec => {
                sectionsHtml += `
                    <div class="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:shadow-sm transition">
                        <h4 class="font-bold text-red-700 text-base flex items-center space-x-2">
                            <span class="w-2 h-2 bg-yellow-400 rounded-full"></span>
                            <span>${sec.heading}</span>
                        </h4>
                        <div class="text-sm text-slate-600 mt-2.5 leading-relaxed space-y-2">
                            ${sec.content}
                        </div>
                    </div>
                `;
            });

            detailPanel.innerHTML = `
                <div class="space-y-6">
                    <div>
                        <span class="text-xs font-extrabold text-red-600 bg-red-100 px-3 py-1 rounded-full uppercase tracking-wider">CHUYÊN ĐỀ ${skill.id}</span>
                        <h3 class="text-2xl font-extrabold text-slate-900 mt-3 tracking-tight">${skill.title}</h3>
                        <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mt-4 text-xs md:text-sm text-slate-700 leading-relaxed">
                            <strong>Mục đích chuyên đề:</strong> ${skill.objective}
                        </div>
                    </div>
                    <div class="space-y-4">
                        ${sectionsHtml}
                    </div>
                </div>
            `;
        }

        // --- ĐIỀU KHIỂN PHẦN MÔ PHỎNG TÌNH HUỐNG (ROLE-PLAY) ---
        let userPoints = 50;
        let activeScenario = null;
        let scenarioStep = 0;

        function updatePointsUI() {
            document.getElementById('dv-points-bar').style.width = `${userPoints}%`;
            document.getElementById('dv-points-text').innerText = `${userPoints}/100`;
            if (userPoints >= 80) {
                document.getElementById('dv-points-text').className = "text-sm font-extrabold text-green-600";
            } else if (userPoints >= 40) {
                document.getElementById('dv-points-text').className = "text-sm font-extrabold text-yellow-600";
            } else {
                document.getElementById('dv-points-text').className = "text-sm font-extrabold text-red-600";
            }
        }

        function renderScenarios() {
            updatePointsUI();
            const selectorGrid = document.getElementById('scenario-selector-grid');
            selectorGrid.innerHTML = '';

            SCENARIOS_DATA.forEach(sc => {
                const card = document.createElement('div');
                card.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between";
                card.innerHTML = `
                    <div>
                        <h4 class="font-extrabold text-slate-900 text-sm md:text-base leading-snug">${sc.title}</h4>
                        <p class="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3">${sc.description}</p>
                    </div>
                    <button onclick="startScenario('${sc.id}')" class="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg text-xs transition">
                        Bắt đầu nhập vai xử lý
                    </button>
                `;
                selectorGrid.appendChild(card);
            });
        }

        function startScenario(scId) {
            activeScenario = SCENARIOS_DATA.find(s => s.id === scId);
            scenarioStep = 0;
            userPoints = 50; // Reset to center
            updatePointsUI();

            document.getElementById('scenario-play-area').classList.remove('hidden');
            renderScenarioStep();
            
            // Scroll down to play area smoothly
            document.getElementById('scenario-play-area').scrollIntoView({ behavior: 'smooth' });
        }

        function renderScenarioStep() {
            const playArea = document.getElementById('scenario-play-area');
            const step = activeScenario.steps[scenarioStep];

            let choicesHtml = '';
            step.choices.forEach((choice, idx) => {
                choicesHtml += `
                    <button onclick="chooseScenarioAnswer(${idx})" class="w-full text-left bg-white hover:bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-red-400 font-semibold text-xs md:text-sm text-slate-800 transition shadow-sm flex items-start space-x-3">
                        <span class="w-6 h-6 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">${idx + 1}</span>
                        <span>${choice.text}</span>
                    </button>
                `;
            });

            playArea.innerHTML = `
                <div class="space-y-4">
                    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span class="text-xs font-bold text-red-600 uppercase tracking-widest">${activeScenario.title}</span>
                        <span class="text-xs text-slate-500 font-bold">Bước: ${scenarioStep + 1} / ${activeScenario.steps.length}</span>
                    </div>
                    <p class="text-slate-800 font-medium text-sm md:text-base leading-relaxed">${step.text}</p>
                    <div class="space-y-3 pt-2">
                        ${choicesHtml}
                    </div>
                </div>
            `;
        }

        function chooseScenarioAnswer(idx) {
            const step = activeScenario.steps[scenarioStep];
            const choice = step.choices[idx];

            // Update Points
            const diff = choice.points - 50; // Map 10 -> -40, 30 -> -20, 100 -> +50
            userPoints = Math.max(0, Math.min(100, userPoints + Math.round(diff / 2)));
            updatePointsUI();

            const playArea = document.getElementById('scenario-play-area');

            // Render feedback view
            let isLastStep = scenarioStep === activeScenario.steps.length - 1;
            let actionBtnHtml = isLastStep 
                ? `<button onclick="finishScenario()" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition">Hoàn thành tình huống</button>`
                : `<button onclick="nextScenarioStep()" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition">Tiếp tục bước tiếp theo</button>`;

            let badgeColor = choice.points === 100 ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200';
            if (choice.points === 30 || choice.points === 50 || choice.points === 60) badgeColor = 'bg-yellow-100 text-yellow-700 border-yellow-200';

            playArea.innerHTML = `
                <div class="space-y-5">
                    <div class="border-b border-slate-200 pb-2">
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Phản hồi của chuyên gia dân vận</span>
                    </div>
                    <div class="p-5 rounded-xl border ${badgeColor} text-xs md:text-sm leading-relaxed">
                        <h4 class="font-bold mb-2">Đánh giá hành động của bạn:</h4>
                        ${choice.feedback}
                    </div>
                    <div class="flex justify-end pt-2">
                        ${actionBtnHtml}
                    </div>
                </div>
            `;
        }

        function nextScenarioStep() {
            scenarioStep++;
            renderScenarioStep();
        }

        function finishScenario() {
            const playArea = document.getElementById('scenario-play-area');
            let evaluation = "";
            let emoji = "💡";

            if (userPoints >= 80) {
                evaluation = "Tuyệt vời! Bạn là một cán bộ 'Dân vận khéo' thực thụ. Tác phong công vụ lịch thiệp, biết lắng nghe thấu cảm, luôn tìm kiếm giải pháp hài hòa ích nước lợi nhà và thực hiện đúng các quy định pháp luật.";
                emoji = "⭐";
            } else if (userPoints >= 50) {
                evaluation = "Đạt yêu cầu. Bạn có ý thức dân vận nhưng một vài lựa chọn vẫn còn mang tính hành chính rập khuôn, chưa phát huy hết sự chủ động gần dân và khéo léo thuyết phục.";
                emoji = "👍";
            } else {
                evaluation = "Cảnh báo! Lề lối và giải pháp xử lý của bạn mang nặng tính hành chính áp đặt, cửa quyền hoặc thụ động đẩy việc. Hãy dành thêm thời gian nghiên cứu kỹ 8 chuyên đề dân vận trong sổ tay.";
                emoji = "⚠️";
            }

            playArea.innerHTML = `
                <div class="text-center py-6 space-y-4">
                    <span class="text-4xl">${emoji}</span>
                    <h3 class="text-xl font-extrabold text-slate-900">Hoàn thành thử thách tình huống</h3>
                    <p class="text-lg font-bold text-red-600">Độ khéo léo dân vận của bạn đạt: ${userPoints} / 100 điểm</p>
                    <p class="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">${evaluation}</p>
                    <div class="flex justify-center space-x-2 pt-4">
                        <button onclick="renderScenarios(); document.getElementById('scenario-play-area').classList.add('hidden');" class="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 px-5 rounded-lg text-xs transition">Quay lại danh sách</button>
                        <button onclick="switchTab('skills')" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg text-xs transition">Học thêm lý thuyết</button>
                    </div>
                </div>
            `;
        }

        // --- ĐIỀU KHIỂN QUIZ (TRẮC NGHIỆM) ---
        let currentQuizIndex = 0;
        let quizScore = 0;
        let selectedOptionIdx = null;

        function startQuiz() {
            currentQuizIndex = 0;
            quizScore = 0;
            selectedOptionIdx = null;

            document.getElementById('quiz-ready-view').classList.add('hidden');
            document.getElementById('quiz-result-view').classList.add('hidden');
            document.getElementById('quiz-question-view').classList.remove('hidden');

            renderQuizQuestion();
        }

        function renderQuizQuestion() {
            selectedOptionIdx = null;
            document.getElementById('quiz-next-btn').disabled = true;
            document.getElementById('quiz-next-btn').className = "bg-slate-300 text-slate-500 font-bold py-2.5 px-6 rounded-xl transition cursor-not-allowed text-sm";
            document.getElementById('quiz-explanation-box').classList.add('hidden');

            const question = QUIZ_QUESTIONS[currentQuizIndex];
            
            // Update realtime numbers
            document.getElementById('quiz-progress-text').innerText = `Câu hỏi: ${currentQuizIndex + 1} / ${QUIZ_QUESTIONS.length}`;
            document.getElementById('quiz-score-realtime').innerText = `Điểm số hiện tại: ${quizScore * 10}`;
            
            // Progress Bar
            const percent = ((currentQuizIndex + 1) / QUIZ_QUESTIONS.length) * 100;
            document.getElementById('quiz-progress-bar').style.width = `${percent}%`;

            // Question Text
            document.getElementById('quiz-question-text').innerText = question.q;

            // Render Options
            const container = document.getElementById('quiz-options-container');
            container.innerHTML = '';

            question.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.onclick = () => selectQuizOption(idx);
                btn.className = "quiz-opt-btn w-full text-left bg-white hover:bg-slate-50 p-4 rounded-xl border border-slate-200 font-medium text-xs md:text-sm text-slate-800 transition shadow-sm flex items-center space-x-3";
                btn.innerHTML = `
                    <span class="w-6 h-6 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">${String.fromCharCode(65 + idx)}</span>
                    <span>${opt}</span>
                `;
                container.appendChild(btn);
            });
        }

        function selectQuizOption(idx) {
            if (selectedOptionIdx !== null) return; // Allow select only once
            selectedOptionIdx = idx;

            const question = QUIZ_QUESTIONS[currentQuizIndex];
            const isCorrect = idx === question.correct;
            if (isCorrect) quizScore++;

            // Highlight Option Buttons
            const optButtons = document.querySelectorAll('.quiz-opt-btn');
            optButtons.forEach((btn, buttonIdx) => {
                if (buttonIdx === question.correct) {
                    btn.className = "quiz-opt-btn w-full text-left bg-green-50 p-4 rounded-xl border-2 border-green-500 font-bold text-xs md:text-sm text-green-900 transition shadow-sm flex items-center space-x-3";
                } else if (buttonIdx === idx) {
                    btn.className = "quiz-opt-btn w-full text-left bg-red-50 p-4 rounded-xl border-2 border-red-500 font-semibold text-xs md:text-sm text-red-900 transition shadow-sm flex items-center space-x-3";
                } else {
                    btn.className = "quiz-opt-btn w-full text-left bg-slate-50 p-4 rounded-xl border border-slate-100 opacity-60 text-xs md:text-sm text-slate-500 transition flex items-center space-x-3";
                }
            });

            // Display Explanation
            const expBox = document.getElementById('quiz-explanation-box');
            expBox.classList.remove('hidden');
            expBox.className = isCorrect 
                ? "bg-green-50 p-4 rounded-xl border border-green-200 text-xs md:text-sm text-slate-700 leading-relaxed" 
                : "bg-red-50 p-4 rounded-xl border border-red-200 text-xs md:text-sm text-slate-700 leading-relaxed";
            expBox.innerHTML = `
                <p class="font-bold mb-1">${isCorrect ? '✅ Trả lời chính xác!' : '❌ Chưa chính xác.'}</p>
                ${question.exp}
            `;

            // Enable Next Button
            const nextBtn = document.getElementById('quiz-next-btn');
            nextBtn.disabled = false;
            nextBtn.className = "bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-xl transition shadow text-sm";
            if (currentQuizIndex === QUIZ_QUESTIONS.length - 1) {
                nextBtn.innerText = "HOÀN THÀNH";
            } else {
                nextBtn.innerText = "CÂU TIẾP THEO";
            }
        }

        function nextQuestion() {
            if (currentQuizIndex === QUIZ_QUESTIONS.length - 1) {
                // Show Result View
                document.getElementById('quiz-question-view').classList.add('hidden');
                document.getElementById('quiz-result-view').classList.remove('hidden');

                const finalScore = quizScore * 10;
                document.getElementById('quiz-result-score-text').innerText = `Kết quả: ${quizScore} / ${QUIZ_QUESTIONS.length} câu đúng (${finalScore} điểm)`;

                let resultEmoji = "💡";
                let feedback = "";
                if (finalScore >= 80) {
                    resultEmoji = "🏆";
                    feedback = "Xuất sắc! Bạn nắm rất vững kiến thức lý luận cốt lõi và quy chế dân vận chính quyền cơ sở theo quyết định của Thành ủy TP.HCM.";
                } else if (finalScore >= 50) {
                    resultEmoji = "💪";
                    feedback = "Tốt. Bạn đạt yêu cầu kiến thức cơ bản nhưng cần nghiên cứu thêm các chuyên đề hòa giải và nắm bắt dư luận xã hội để tự tin xử lý thực tế trọn vẹn hơn.";
                } else {
                    resultEmoji = "📖";
                    feedback = "Cần cải thiện nhiều. Bạn chưa hiểu rõ các bước quy định trong Sổ tay dân vận chính quyền. Hãy đọc lại kỹ 8 chuyên đề kỹ năng và làm lại bài kiểm tra.";
                }

                document.getElementById('quiz-result-badge').innerText = resultEmoji;
                document.getElementById('quiz-result-feedback').innerText = feedback;
            } else {
                currentQuizIndex++;
                renderQuizQuestion();
            }
        }

        // --- ĐIỀU KHIỂN HỆ THỐNG TRA CỨU NHANH ---
        function handleSearch() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            const container = document.getElementById('search-results-container');
            container.innerHTML = '';

            let foundCount = 0;

            // Search through SKILLS_DATA
            SKILLS_DATA.forEach(skill => {
                let matchesSkill = skill.title.toLowerCase().includes(query) || skill.objective.toLowerCase().includes(query);
                let matchingSections = [];

                skill.sections.forEach(sec => {
                    if (sec.heading.toLowerCase().includes(query) || sec.content.toLowerCase().includes(query)) {
                        matchingSections.push(sec);
                    }
                });

                if (matchesSkill || matchingSections.length > 0) {
                    foundCount++;
                    const card = document.createElement('div');
                    card.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3";
                    
                    let sectionsHtml = '';
                    // If matched by specific sections, display only those. Else display first section as preview.
                    const displaySecs = matchingSections.length > 0 ? matchingSections : [skill.sections[0]];
                    displaySecs.forEach(sec => {
                        sectionsHtml += `
                            <div class="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs md:text-sm text-slate-600 mt-2">
                                <h5 class="font-bold text-red-700">${sec.heading}</h5>
                                <p class="mt-1 leading-relaxed">${sec.content}</p>
                            </div>
                        `;
                    });

                    card.innerHTML = `
                        <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                            <span class="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">Chuyên đề ${skill.id}</span>
                            <button onclick="currentSkillId = ${skill.id}; switchTab('skills');" class="text-xs text-blue-600 hover:underline font-bold">Xem toàn bộ chuyên đề →</button>
                        </div>
                        <h4 class="font-extrabold text-slate-900 text-sm md:text-base">${skill.title}</h4>
                        <div class="space-y-2">
                            ${sectionsHtml}
                        </div>
                    `;
                    container.appendChild(card);
                }
            });

            if (foundCount === 0) {
                container.innerHTML = `
                    <div class="text-center py-12 text-slate-500">
                        <svg class="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p class="text-sm">Không tìm thấy tài liệu phù hợp với từ khóa của bạn. Hãy thử từ khóa khác như "hòa giải", "đối thoại", "giao tiếp"...</p>
                    </div>
                `;
            }
        }
