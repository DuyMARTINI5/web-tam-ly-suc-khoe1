export const mockUsers = [
  {
    id: 1,
    email: 'duyvuongcd@gmail.com',
    password: 'Lonelyandproud5@',
    name: 'Vương khánh duy ',
  },
  {
    id: 2,
    email: 'user2@example.com',
    password: 'password456',
    name: 'Trần Thị B',
  },
];


export const mockBooks = [
  {
    id: 1,
    title: 'Sức Mạnh Của Thói Quen',
    author: 'Charles Duhigg',
    price: 120000,
    description: 'Cuốn sách giúp bạn hiểu được cách hình thành thói quen và cách thay đổi chúng để đạt được thành công.',
    image: '/assets/images/books/1.jpg',
    rating: 5, // Bổ sung thuộc tính rating
  },
  {
    id: 2,
    title: 'Tâm Lý Học Nhận Thức',
    author: 'Patrick Edblad',
    price: 150000,
    description: 'Rèn luyện kỹ năng phát triển bản thân, kiểm soát cảm xúc và đạt cân bằng trong cuộc sống.',
    image: '/assets/images/books/2.jpg',
    rating: 4,
  },
  {
    id: 3,
    title: 'Tư Duy Nhanh và Chậm',
    author: 'Daniel Kahneman',
    price: 200000,
    description: 'Cuốn sách bán chạy hàng đầu thế giới về cách não bộ con người đưa ra quyết định.',
    image: '/assets/images/books/3.jpg',
    rating: 5,
  },
  {
    id: 4,
    title: 'Đi Tìm Lẽ Sống',
    author: 'Viktor E. Frankl',
    price: 130000,
    description: 'Câu chuyện đầy cảm hứng từ một nhà tâm lý học sống sót trong trại tập trung Đức Quốc Xã.',
    image: '/assets/images/books/4.jpg',
    rating: 5,
  },
  {
    id: 5,
    title: 'Tâm Lý Học Về Tiền',
    author: 'Morgan Housel',
    price: 180000,
    description: 'Những bí mật về sự thịnh vượng và cách quản lý tài chính cá nhân.',
    image: '/assets/images/books/5.jpg',
    rating: 4,
  },
  {
    id: 6,
    title: 'Nghệ Thuật Thuyết Phục',
    author: 'Robert B. Cialdini',
    price: 170000,
    description: 'Những nguyên tắc tâm lý học giúp bạn thuyết phục và gây ảnh hưởng một cách hiệu quả.',
    image: '/assets/images/books/6.jpg',
    rating: 3,
  },
  {
    id: 7,
    title: 'Trí Tuệ Xúc Cảm 2.0',
    author: 'Travis Bradberry & Jean Greaves',
    price: 190000,
    description: 'Phát triển trí tuệ xúc cảm để đạt thành công trong sự nghiệp và cuộc sống.',
    image: '/assets/images/books/7.jpg',
    rating: 4,
  },
  {
    id: 8,
    title: 'Nghệ Thuật Sống Hạnh Phúc',
    author: 'Dalai Lama & Howard Cutler',
    price: 160000,
    description: 'Một cuốn sách mang đến những bài học sâu sắc về hạnh phúc và cuộc sống.',
    image: '/assets/images/books/8.jpg',
    rating: 5,
  },
  {
    id: 9,
    title: 'Tĩnh Lặng',
    author: 'Susan Cain',
    price: 150000,
    description: 'Sức mạnh của sự yên lặng trong một thế giới ồn ào và vội vã.',
    image: '/assets/images/books/9.jpg',
    rating: 3,
  },
  {
    id: 10,
    title: 'Grit - Sức Mạnh Đam Mê và Kiên Trì',
    author: 'Angela Duckworth',
    price: 200000,
    description: 'Khám phá yếu tố quyết định thành công vượt trội - không phải tài năng, mà là sự kiên trì.',
    image: '/assets/images/books/10.jpg',
    rating: 5,
  },
];



  
  export const mockTests = [
    {
      id: 1,
      title: 'Kiểm tra mức độ stress',
      description: 'Hãy tham gia bài test để biết mức độ stress của bạn.',
      questions: [
        {
          text: 'Bạn cảm thấy áp lực khi làm việc?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có ngủ đủ giấc không?',
          options: [
            { label: 'Có', score: 1 },
            { label: 'Không', score: 3 },
          ],
        },
        {
          text: 'Bạn có thấy khó khăn trong việc hoàn thành công việc đúng hạn?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có thường xuyên cảm thấy kiệt sức?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có thấy khó chịu hoặc cáu gắt không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có thấy mất hứng thú với những hoạt động trước đây yêu thích không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy khó tập trung khi làm việc không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy mệt mỏi kéo dài không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có thường xuyên lo lắng không rõ lý do không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy đau đầu hoặc đau cơ thường xuyên không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy ăn không ngon miệng không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy lo lắng về tương lai không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy mối quan hệ cá nhân đang bị ảnh hưởng không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có thường xuyên mơ thấy ác mộng không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy không muốn tiếp xúc với người khác không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy mất động lực làm việc không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy mất kiểm soát cảm xúc không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy muốn từ bỏ mọi thứ không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy sức khỏe tinh thần đang giảm sút không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
        {
          text: 'Bạn có cảm thấy thường xuyên bị choáng ngợp bởi công việc không?',
          options: [
            { label: 'Rất thường xuyên', score: 3 },
            { label: 'Thỉnh thoảng', score: 2 },
            { label: 'Không bao giờ', score: 1 },
          ],
        },
      ],
    },
      {
        id: 2,
        title: 'Kiểm tra mức độ tự tin',
        description: 'Hãy tham gia bài test để biết mức độ tự tin của bạn.',
        questions: [
          {
            text: 'Bạn có dễ dàng phát biểu ý kiến trước đám đông không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có tin tưởng vào khả năng của bản thân không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có thường chủ động trong các tình huống xã hội không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có cảm thấy lo lắng khi gặp người lạ không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có dễ dàng đưa ra quyết định không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có thấy thoải mái khi được chú ý không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có cảm thấy tự hào về những thành tựu của mình không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có sẵn lòng thử những điều mới không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có cảm thấy mình có giá trị không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có thường xuyên đặt mục tiêu cho bản thân không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có cảm thấy mình đủ khả năng để đối mặt với thử thách không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có dễ dàng đưa ra ý kiến trong nhóm không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có tin tưởng vào quyết định của mình không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có thấy thoải mái khi được giao nhiệm vụ lớn không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có cảm thấy mình đủ khả năng để giải quyết vấn đề không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có sẵn sàng đối mặt với rủi ro để đạt được mục tiêu không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có cảm thấy mình có thể truyền cảm hứng cho người khác không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có cảm thấy mình là người tự tin không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
          {
            text: 'Bạn có thường xuyên tự đánh giá và cải thiện bản thân không?',
            options: [
              { label: 'Rất thường xuyên', score: 3 },
              { label: 'Thỉnh thoảng', score: 2 },
              { label: 'Không bao giờ', score: 1 },
            ],
          },
        ],
      },
        {
          id: 3,
          title: 'Kiểm tra mức độ lạc quan',
          description: 'Hãy tham gia bài test để biết mức độ lạc quan của bạn.',
          questions: [
            {
              text: 'Bạn có thường nghĩ về điều tích cực trong cuộc sống?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có dễ dàng tìm thấy điểm sáng trong những tình huống khó khăn?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có tin rằng mọi việc rồi sẽ tốt đẹp?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có cảm thấy hy vọng về tương lai không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có hay động viên bản thân khi gặp khó khăn không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có thường xuyên cảm thấy hài lòng với cuộc sống hiện tại không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có thấy dễ dàng cười và vui vẻ không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có tìm kiếm sự giúp đỡ khi cần không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có dành thời gian cho sở thích của mình không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có thường xuyên cảm thấy biết ơn với những gì mình có không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có tập trung vào mặt tốt của mọi người không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có tin rằng bạn có thể kiểm soát cuộc sống của mình không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có cảm thấy bạn có đủ thời gian để làm mọi việc bạn muốn không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có thể tìm thấy niềm vui trong những điều nhỏ nhặt không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có thường xuyên chia sẻ niềm vui với người khác không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có cảm thấy hạnh phúc khi giúp đỡ người khác không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có dành thời gian để nhìn lại những điều tốt đẹp bạn đã làm không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có cảm thấy mọi khó khăn đều có cách giải quyết không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
            {
              text: 'Bạn có dành thời gian để tự chăm sóc bản thân không?',
              options: [
                { label: 'Rất thường xuyên', score: 3 },
                { label: 'Thỉnh thoảng', score: 2 },
                { label: 'Không bao giờ', score: 1 },
              ],
            },
          ],
        },
          {
            id: 4,
            title: 'Kiểm tra mức độ đồng cảm',
            description: 'Hãy tham gia bài test để biết mức độ đồng cảm của bạn.',
            questions: [
              {
                text: 'Bạn có thường đặt mình vào vị trí của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cảm thấy buồn khi thấy người khác buồn không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có dễ dàng nhận ra cảm xúc của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có sẵn sàng giúp đỡ người khác khi họ cần không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cảm thấy dễ dàng lắng nghe người khác tâm sự không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có hay quan tâm đến cảm giác của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có thường cố gắng hiểu ý định của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cảm thấy thoải mái khi người khác chia sẻ cảm xúc không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có thường cố gắng động viên người khác khi họ buồn không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cảm thấy hài lòng khi giúp đỡ người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cố gắng tránh làm tổn thương cảm xúc của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có thường giúp đỡ người khác vượt qua khó khăn không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cảm thấy thấu hiểu hành động của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có dễ dàng tha thứ cho lỗi lầm của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cảm thấy vui khi người khác thành công không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có hay suy nghĩ về cách cải thiện mối quan hệ với người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có dễ dàng chia sẻ niềm vui của mình với người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có cảm thấy đồng cảm khi người khác gặp khó khăn không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
              {
                text: 'Bạn có thường xuyên suy nghĩ về cảm giác của người khác không?',
                options: [
                  { label: 'Rất thường xuyên', score: 3 },
                  { label: 'Thỉnh thoảng', score: 2 },
                  { label: 'Không bao giờ', score: 1 },
                ],
              },
            ],
          },
            {
              id: 5,
              title: 'Kiểm tra mức độ quản lý thời gian',
              description: 'Hãy tham gia bài test để biết khả năng quản lý thời gian của bạn.',
              questions: [
                {
                  text: 'Bạn có thường lập kế hoạch hàng ngày không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có dễ dàng hoàn thành công việc đúng hạn không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có cảm thấy thời gian của mình được sử dụng hiệu quả không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có thường trì hoãn công việc không?',
                  options: [
                    { label: 'Không bao giờ', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Rất thường xuyên', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có cảm thấy áp lực vì thiếu thời gian không?',
                  options: [
                    { label: 'Không bao giờ', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Rất thường xuyên', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có thường đặt mục tiêu rõ ràng cho công việc không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có cảm thấy kiểm soát được thời gian của mình không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có dành thời gian ưu tiên cho công việc quan trọng không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có dễ dàng nói "không" với các công việc không cần thiết không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có sắp xếp thời gian để nghỉ ngơi không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có dành thời gian để xem lại hiệu quả công việc không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có thường cảm thấy hài lòng với tiến độ công việc của mình không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có lập danh sách công việc cần làm hàng ngày không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có cảm thấy thời gian dành cho công việc và gia đình cân bằng không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có hoàn thành các mục tiêu ngắn hạn đúng hạn không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có dễ dàng xử lý các công việc khẩn cấp không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có dành thời gian để học thêm kỹ năng mới không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có sử dụng công cụ để hỗ trợ quản lý thời gian không?',
                  options: [
                    { label: 'Rất thường xuyên', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Không bao giờ', score: 1 },
                  ],
                },
                {
                  text: 'Bạn có cảm thấy khó khăn trong việc kiểm soát thời gian không?',
                  options: [
                    { label: 'Không bao giờ', score: 3 },
                    { label: 'Thỉnh thoảng', score: 2 },
                    { label: 'Rất thường xuyên', score: 1 },
                  ],
                },
              ],
            },
              {
                id: 6,
                title: 'Kiểm tra kỹ năng ra quyết định',
                description: 'Hãy tham gia bài test để đánh giá khả năng ra quyết định của bạn.',
                questions: [
                  {
                    text: 'Bạn có thường cân nhắc kỹ lưỡng trước khi đưa ra quyết định không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có cảm thấy tự tin với những quyết định của mình không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có thường hối tiếc sau khi đưa ra quyết định không?',
                    options: [
                      { label: 'Không bao giờ', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Rất thường xuyên', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có tìm kiếm ý kiến từ người khác trước khi quyết định không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có thường lập kế hoạch trước khi quyết định không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có cảm thấy mình có thể dự đoán được hậu quả của quyết định không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có dễ dàng lựa chọn giữa các phương án không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có thường xuyên đưa ra quyết định trong thời gian ngắn không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có cảm thấy áp lực khi phải đưa ra quyết định không?',
                    options: [
                      { label: 'Không bao giờ', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Rất thường xuyên', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có thường chịu trách nhiệm cho quyết định của mình không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có tự đánh giá lại các quyết định của mình sau khi thực hiện không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có thường học hỏi từ các quyết định sai lầm không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có thường tập trung vào các thông tin quan trọng trước khi quyết định không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có sẵn sàng thay đổi quyết định khi cần thiết không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có cảm thấy mình đưa ra các quyết định hiệu quả không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có dễ dàng phân tích các ưu và nhược điểm của mỗi phương án không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có thường cảm thấy hài lòng với quyết định của mình không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có cảm thấy mình kiểm soát được các yếu tố ảnh hưởng đến quyết định không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                  {
                    text: 'Bạn có dễ dàng đưa ra quyết định ngay cả khi không có đầy đủ thông tin không?',
                    options: [
                      { label: 'Rất thường xuyên', score: 3 },
                      { label: 'Thỉnh thoảng', score: 2 },
                      { label: 'Không bao giờ', score: 1 },
                    ],
                  },
                ],
              },
                {
                  id: 7,
                  title: 'Kiểm tra khả năng làm việc nhóm',
                  description: 'Hãy tham gia bài test để đánh giá khả năng làm việc nhóm của bạn.',
                  questions: [
                    {
                      text: 'Bạn có thường xuyên lắng nghe ý kiến của đồng đội không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có dễ dàng giao tiếp với các thành viên trong nhóm không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có thường hỗ trợ đồng đội khi họ gặp khó khăn không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có sẵn sàng đảm nhận vai trò lãnh đạo khi cần thiết không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có tôn trọng ý kiến của mọi thành viên trong nhóm không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có dễ dàng phối hợp với các thành viên để đạt mục tiêu chung không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có cảm thấy thoải mái khi nhận phản hồi từ đồng đội không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có đóng góp ý tưởng khi làm việc nhóm không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có giữ bình tĩnh khi xảy ra mâu thuẫn trong nhóm không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có đề xuất giải pháp khi nhóm gặp khó khăn không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có thường đảm bảo rằng nhiệm vụ của mình hoàn thành đúng hạn không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có tin tưởng vào khả năng của đồng đội không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có thường xuyên chia sẻ tài liệu hoặc thông tin hữu ích với nhóm không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có thích nghi tốt với phong cách làm việc của nhóm không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có cảm thấy nhóm của bạn đạt hiệu suất cao không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có sẵn sàng hỗ trợ nhóm khi có vấn đề không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có dễ dàng thích nghi khi vai trò của bạn trong nhóm thay đổi không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có cảm thấy hài lòng khi nhóm đạt được thành tựu không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                    {
                      text: 'Bạn có học hỏi được nhiều từ đồng đội của mình không?',
                      options: [
                        { label: 'Rất thường xuyên', score: 3 },
                        { label: 'Thỉnh thoảng', score: 2 },
                        { label: 'Không bao giờ', score: 1 },
                      ],
                    },
                  ],
                },
                  {
                    id: 8,
                    title: 'Kiểm tra khả năng sáng tạo',
                    description: 'Hãy tham gia bài test để đánh giá mức độ sáng tạo của bạn.',
                    questions: [
                      {
                        text: 'Bạn có thường tìm cách mới để giải quyết vấn đề không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có cảm thấy thoải mái khi thử những ý tưởng mới không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có thường suy nghĩ ngoài khuôn khổ không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có cảm thấy hứng thú khi học hỏi những điều mới không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có dễ dàng tạo ra những ý tưởng độc đáo không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có thường xuyên cải tiến cách làm việc của mình không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có cảm thấy thoải mái khi làm việc trong môi trường không chắc chắn không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có hay đặt câu hỏi để hiểu rõ hơn về vấn đề không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có sẵn sàng chấp nhận thất bại khi thử nghiệm ý tưởng mới không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có thường nghĩ ra nhiều giải pháp cho một vấn đề không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có cảm thấy vui khi khám phá ra những điều mới mẻ không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có dành thời gian để suy nghĩ và tưởng tượng không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có thích thử nghiệm các cách làm việc khác nhau không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có thường đưa ra các ý tưởng cải tiến không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có dễ dàng thích nghi với thay đổi không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có hay tìm hiểu những cách làm mới từ người khác không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có thường xuyên suy nghĩ về những ý tưởng khác biệt không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có cảm thấy dễ dàng tạo ra các mối liên kết giữa các ý tưởng không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có thường thử cách làm việc khác với truyền thống không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                      {
                        text: 'Bạn có cảm thấy hào hứng khi được yêu cầu sáng tạo không?',
                        options: [
                          { label: 'Rất thường xuyên', score: 3 },
                          { label: 'Thỉnh thoảng', score: 2 },
                          { label: 'Không bao giờ', score: 1 },
                        ],
                      },
                    ],
                  },
                    {
                      id: 9,
                      title: 'Kiểm tra mức độ kiên nhẫn',
                      description: 'Hãy tham gia bài test để đánh giá mức độ kiên nhẫn của bạn.',
                      questions: [
                        {
                          text: 'Bạn có dễ dàng kiên nhẫn chờ đợi trong các tình huống hàng ngày không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có cảm thấy khó chịu khi phải chờ đợi lâu không?',
                          options: [
                            { label: 'Không bao giờ', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Rất thường xuyên', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có thường hoàn thành công việc dù gặp nhiều trở ngại không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có dễ dàng giữ bình tĩnh khi gặp vấn đề bất ngờ không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có thường đặt mục tiêu dài hạn và kiên nhẫn thực hiện không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có cảm thấy dễ dàng lắng nghe người khác không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có kiên nhẫn học hỏi kỹ năng mới không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có dễ dàng chấp nhận rằng một số việc cần thời gian để hoàn thành không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có kiên nhẫn đối mặt với những tình huống khó khăn không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có thường giữ bình tĩnh trong các tình huống áp lực không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có kiên nhẫn làm những công việc tốn nhiều thời gian không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có dễ dàng tiếp tục cố gắng ngay cả khi kết quả không như mong đợi không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có kiên nhẫn tìm hiểu kỹ trước khi đưa ra quyết định không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có thường nhẫn nại với người khác khi họ không hiểu vấn đề không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có cảm thấy thoải mái khi làm việc với những dự án dài hạn không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có thường xuyên xem xét lại mục tiêu và điều chỉnh nếu cần không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có kiên nhẫn tìm kiếm giải pháp tối ưu cho vấn đề không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có cảm thấy dễ dàng kiểm soát cảm xúc khi phải chờ đợi không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                        {
                          text: 'Bạn có giữ được sự nhẫn nại khi gặp phải lời chỉ trích không?',
                          options: [
                            { label: 'Rất thường xuyên', score: 3 },
                            { label: 'Thỉnh thoảng', score: 2 },
                            { label: 'Không bao giờ', score: 1 },
                          ],
                        },
                      ],
                    },
 ];
                  
                
                        
  export const mockArticles = [
    {
      id: 1,
      title: 'Bài Viết Về Cân Bằng Cuộc Sống',
      description: 'Học cách cân bằng giữa công việc và cuộc sống để duy trì sức khỏe tâm lý tốt nhất.',
      image: '/assets/images/articles/bai-viet-1.jpg',
      author: 'Nguyễn Văn A',
      createdAt: '2024-12-01',
      content: `Cân Bằng Cuộc Sống: Chìa Khóa Hạnh Phúc và Thành Công
  
  Trong xã hội hiện đại, việc tìm kiếm sự cân bằng giữa công việc và cuộc sống cá nhân là một thách thức không nhỏ. Với áp lực từ công việc, gia đình, và những mối quan hệ xã hội, rất dễ để rơi vào tình trạng mất cân bằng, dẫn đến stress, kiệt sức, và giảm chất lượng cuộc sống. Tuy nhiên, cân bằng không phải là một điều không thể đạt được. Đây là một kỹ năng cần rèn luyện và áp dụng mỗi ngày.
  
  1. Tại sao cân bằng cuộc sống lại quan trọng?
  Khi bạn đạt được sự cân bằng giữa công việc và cuộc sống, bạn sẽ cảm thấy hài lòng và tràn đầy năng lượng hơn. Một cuộc sống cân bằng giúp:
  - Giảm căng thẳng và áp lực từ công việc.
  - Duy trì sức khỏe thể chất và tinh thần.
  - Tăng cường sự gắn bó trong các mối quan hệ gia đình và bạn bè.
  - Nâng cao năng suất và sự sáng tạo trong công việc.
  
  Ngược lại, nếu bạn chỉ tập trung vào một khía cạnh, ví dụ như công việc, bạn có thể nhanh chóng cảm thấy mệt mỏi và mất phương hướng.
  
  2. Làm thế nào để đạt được sự cân bằng?
  Hiểu rõ mục tiêu và ưu tiên của bạn: Bước đầu tiên là tự hỏi bản thân điều gì thực sự quan trọng với bạn. Đó có thể là sức khỏe, gia đình, sự nghiệp, hoặc sở thích cá nhân. Xác định rõ ưu tiên sẽ giúp bạn tập trung vào những điều có ý nghĩa nhất.
  
  Lập kế hoạch: Một kế hoạch hàng ngày hoặc hàng tuần sẽ giúp bạn tổ chức thời gian hiệu quả hơn. Dành thời gian cho công việc, nhưng cũng đừng quên dành thời gian thư giãn, chăm sóc bản thân, và ở bên gia đình.
  
  Học cách từ chối: Bạn không thể làm hài lòng tất cả mọi người. Hãy học cách nói "không" với những yêu cầu không cần thiết để giữ thời gian và năng lượng cho những gì thực sự quan trọng.
  
  Chăm sóc sức khỏe bản thân: Duy trì một chế độ ăn uống lành mạnh, tập thể dục thường xuyên, và ngủ đủ giấc. Sức khỏe tốt là nền tảng để bạn đối mặt với mọi thử thách trong cuộc sống.
  
  Dành thời gian cho sở thích cá nhân:Sở thích không chỉ giúp bạn thư giãn mà còn là nguồn cảm hứng và năng lượng tích cực. Hãy đọc sách, vẽ tranh, hoặc đơn giản là đi dạo để tái tạo sức sống.
  
  3. Cân bằng không có nghĩa là hoàn hảo:
  Hãy nhớ rằng, cân bằng không phải là đạt được mọi thứ trong mọi lúc. Có những ngày bạn cần tập trung vào công việc nhiều hơn, và có những lúc gia đình hoặc bản thân cần được ưu tiên. Điều quan trọng là sự linh hoạt và ý thức tự điều chỉnh.
  
  4. Những mẹo nhỏ để duy trì sự cân bằng:
  - Tắt thông báo điện thoại và email khi không cần thiết.
  - Dành thời gian “tĩnh lặng” mỗi ngày để thiền hoặc suy ngẫm.
  - Chia sẻ trách nhiệm trong công việc và gia đình.
  - Thường xuyên tự đánh giá lại mục tiêu và tiến trình của bạn.
  
  5. Lời kết
  Cân bằng cuộc sống là một hành trình dài, không phải một đích đến. Hãy kiên nhẫn với bản thân và tập trung vào việc duy trì sự hài hòa trong từng khía cạnh của cuộc sống. Với sự cố gắng và ý thức, bạn hoàn toàn có thể đạt được một cuộc sống tràn đầy hạnh phúc và thành công.`,


  
      link: '/articles/1'
  },
  
  {
    id: 2,
    title: 'Kỹ Năng Quản Lý Cảm Xúc',
    description: 'Học cách quản lý cảm xúc một cách hiệu quả để vượt qua các thách thức trong cuộc sống.',
    image: '/assets/images/articles/bai-viet-2.jpg',
    author: 'Trần Thị B',
    createdAt: '2024-11-28',
    content: `Kỹ Năng Quản Lý Cảm Xúc: Công Cụ Quan Trọng Trong Cuộc Sống Hiện Đại

Cảm xúc là một phần tự nhiên của con người. Chúng ta cảm thấy vui, buồn, giận dữ, sợ hãi hay bất kỳ trạng thái cảm xúc nào khác trong cuộc sống hàng ngày. Tuy nhiên, khi cảm xúc không được quản lý tốt, chúng có thể trở thành nguyên nhân gây ra stress, xung đột và những quyết định thiếu sáng suốt. Vậy làm thế nào để quản lý cảm xúc hiệu quả? Hãy cùng khám phá trong bài viết này.

1. Tại sao quản lý cảm xúc lại quan trọng?
Quản lý cảm xúc không chỉ giúp bạn duy trì mối quan hệ tích cực với người khác mà còn cải thiện sức khỏe tâm lý của chính bạn. Những lợi ích chính bao gồm:
- Tăng khả năng kiểm soát tình huống khó khăn.
- Giảm thiểu căng thẳng và nguy cơ mắc các vấn đề sức khỏe tâm thần.
- Cải thiện sự tự tin và lòng tự trọng.
- Giúp bạn đưa ra quyết định sáng suốt hơn.

Ngược lại, nếu bạn để cảm xúc chi phối, bạn có thể dễ dàng mất kiểm soát và đưa ra những hành động hoặc lời nói mà bạn hối tiếc sau này.

2. Những bước cơ bản để quản lý cảm xúc
Nhận diện cảm xúc: Bước đầu tiên trong việc quản lý cảm xúc là nhận biết và gọi tên cảm xúc của mình. Bạn đang cảm thấy gì? Buồn, giận dữ, hay lo lắng? Việc nhận diện rõ ràng giúp bạn có cái nhìn chính xác hơn về tình trạng của bản thân.

Chấp nhận cảm xúc: Đừng cố gắng phủ nhận hoặc trốn tránh cảm xúc của mình. Hãy chấp nhận rằng cảm xúc là một phần tự nhiên của cuộc sống, và bạn không cần cảm thấy xấu hổ hay có lỗi về những gì mình đang trải qua.

Tìm nguyên nhân: Sau khi nhận diện cảm xúc, hãy tự hỏi tại sao bạn lại cảm thấy như vậy. Có phải do áp lực công việc? Một mâu thuẫn trong gia đình? Hay những kỳ vọng chưa được đáp ứng? Tìm ra nguyên nhân gốc rễ là bước quan trọng để giải quyết vấn đề.

3. Các kỹ thuật giúp quản lý cảm xúc hiệu quả
- Thở sâu và thư giãn: Khi bạn cảm thấy căng thẳng hoặc tức giận, hãy dành một vài phút để thở sâu. Điều này giúp làm dịu hệ thần kinh và mang lại sự bình tĩnh.
- Viết nhật ký cảm xúc: Ghi lại những gì bạn đang cảm thấy có thể giúp bạn hiểu rõ hơn về bản thân và tìm ra cách xử lý phù hợp.
- Thực hành mindfulness (chánh niệm): Dành thời gian tập trung vào hiện tại thay vì lo lắng về quá khứ hoặc tương lai.
- Tập thể dục: Hoạt động thể chất không chỉ cải thiện sức khỏe mà còn giúp giải phóng năng lượng tiêu cực.

4. Cải thiện mối quan hệ thông qua quản lý cảm xúc
Cảm xúc không chỉ ảnh hưởng đến bản thân bạn mà còn tác động đến những người xung quanh. Việc học cách lắng nghe, thông cảm và không phản ứng quá mức trong các tình huống căng thẳng sẽ giúp bạn xây dựng các mối quan hệ bền vững.

5. Lời kết
Quản lý cảm xúc không phải là một kỹ năng có thể học một sớm một chiều. Đây là một quá trình dài hạn, đòi hỏi sự kiên nhẫn và thực hành thường xuyên. Hãy bắt đầu từ những bước nhỏ, như nhận diện và chấp nhận cảm xúc của mình. Với thời gian, bạn sẽ thấy mình trở nên mạnh mẽ hơn trong việc đối mặt với các thử thách của cuộc sống.

Hãy nhớ rằng cảm xúc không phải là kẻ thù. Chúng là người bạn đồng hành, giúp bạn hiểu rõ hơn về bản thân và thế giới xung quanh. Quản lý cảm xúc hiệu quả sẽ là chìa khóa giúp bạn sống một cuộc sống cân bằng và hạnh phúc.`,
    link: '/articles/2'
},


{
  id: 3,
  title: 'Chăm Sóc Sức Khỏe Tâm Lý',
  description: 'Những phương pháp chăm sóc sức khỏe tâm lý đơn giản và hiệu quả bạn có thể áp dụng hàng ngày.',
  image: '/assets/images/articles/bai-viet-3.jpg',
  author: 'Lê Minh C',
  createdAt: '2024-11-20',
  content: `Chăm Sóc Sức Khỏe Tâm Lý: Hành Động Nhỏ, Hiệu Quả Lớn

Sức khỏe tâm lý là một trong những yếu tố quan trọng nhất quyết định chất lượng cuộc sống của mỗi người. Tuy nhiên, nhiều người thường chỉ chú ý đến sức khỏe thể chất mà bỏ qua tâm lý, dẫn đến stress, lo âu, hoặc thậm chí trầm cảm. Để duy trì một tinh thần khỏe mạnh, bạn cần chú trọng đến những thói quen hàng ngày, từ nhỏ nhất đến lớn nhất.

1. Tại sao chăm sóc sức khỏe tâm lý lại quan trọng?
Sức khỏe tâm lý không chỉ ảnh hưởng đến tinh thần mà còn tác động trực tiếp đến cơ thể. Một tâm lý khỏe mạnh giúp bạn:
- Đối mặt tốt hơn với căng thẳng và những thách thức trong cuộc sống.
- Cải thiện chất lượng các mối quan hệ.
- Tăng hiệu suất làm việc và học tập.
- Ngăn ngừa các vấn đề sức khỏe như huyết áp cao, mất ngủ, hoặc đau đầu.

Ngược lại, nếu bạn bỏ bê sức khỏe tâm lý, các vấn đề như lo âu, kiệt sức hoặc trầm cảm có thể xuất hiện và kéo dài, ảnh hưởng tiêu cực đến cuộc sống hàng ngày.

2. Những thói quen giúp chăm sóc sức khỏe tâm lý
- Dành thời gian cho bản thân: Đôi khi, bạn cần "tạm dừng" khỏi nhịp sống hối hả để dành thời gian chăm sóc bản thân. Điều này có thể đơn giản như uống một tách trà, đọc sách yêu thích, hoặc ngồi thiền vài phút mỗi ngày.
- Kết nối với người khác: Tâm lý con người luôn cần sự kết nối. Dành thời gian nói chuyện với bạn bè, gia đình hoặc tham gia các hoạt động xã hội sẽ giúp bạn cảm thấy được yêu thương và hỗ trợ.
- Chăm sóc cơ thể: Tập thể dục thường xuyên, ăn uống lành mạnh và ngủ đủ giấc là những yếu tố không thể thiếu để duy trì cả sức khỏe thể chất lẫn tinh thần.
- Viết nhật ký: Ghi lại những suy nghĩ, cảm xúc của mình có thể giúp bạn nhận thức rõ hơn về tình trạng tâm lý và tìm ra cách giải quyết những khó khăn.

3. Những hoạt động nâng cao sức khỏe tâm lý
- Tham gia các lớp học mindfulness hoặc yoga: Những hoạt động này không chỉ giúp thư giãn mà còn cải thiện khả năng tập trung và kiểm soát cảm xúc.
- Thực hành lòng biết ơn: Mỗi ngày, hãy dành vài phút để viết ra những điều bạn cảm thấy biết ơn. Điều này giúp bạn tập trung vào những khía cạnh tích cực của cuộc sống.
- Học cách tha thứ: Tha thứ không chỉ dành cho người khác mà còn là cách để bạn giải thoát bản thân khỏi những cảm xúc tiêu cực.

4. Dấu hiệu cần chú ý
Dù bạn có cố gắng chăm sóc bản thân đến đâu, đôi khi sức khỏe tâm lý vẫn có thể bị ảnh hưởng bởi các yếu tố bên ngoài. Nếu bạn thường xuyên cảm thấy lo âu, mất ngủ hoặc không thể tập trung, hãy tìm đến các chuyên gia tâm lý để được hỗ trợ kịp thời.

5. Lời kết
Chăm sóc sức khỏe tâm lý không phải là điều xa xỉ mà là một phần quan trọng của cuộc sống. Hãy bắt đầu từ những hành động nhỏ, như dành thời gian nghỉ ngơi hoặc kết nối với những người bạn yêu thương. Với những nỗ lực nhỏ hàng ngày, bạn sẽ thấy tâm trạng và chất lượng cuộc sống của mình được cải thiện rõ rệt.

Hãy luôn nhớ rằng, sức khỏe tâm lý là tài sản quý giá nhất mà bạn cần bảo vệ.`,
  link: '/articles/3'
},


{
  id: 4,
  title: 'Giảm Stress Hiệu Quả',
  description: 'Các biện pháp giúp giảm stress nhanh chóng và hiệu quả, phù hợp cho cuộc sống bận rộn.',
  image: '/assets/images/articles/bai-viet-4.jpg',
  author: 'Phạm Thùy D',
  createdAt: '2024-11-15',
  content: `Giảm Stress Hiệu Quả: Giải Pháp Đơn Giản Cho Cuộc Sống Bận Rộn

Stress là một phần không thể tránh khỏi trong cuộc sống hiện đại. Từ áp lực công việc, học tập đến các mối quan hệ cá nhân, tất cả đều có thể khiến bạn cảm thấy mệt mỏi và kiệt sức. Tuy nhiên, stress không phải là kẻ thù nếu bạn biết cách quản lý và giảm thiểu nó một cách hiệu quả. Hãy cùng khám phá những biện pháp đơn giản nhưng đầy hiệu quả trong bài viết này.

1. Hiểu về stress và tác động của nó
Stress là phản ứng tự nhiên của cơ thể trước những thách thức hoặc áp lực. Mặc dù một lượng stress nhỏ có thể giúp bạn tập trung và hoàn thành nhiệm vụ, nhưng nếu kéo dài, nó có thể gây ra nhiều vấn đề như:
- Mất ngủ, mệt mỏi kéo dài.
- Giảm khả năng tập trung và sáng tạo.
- Tăng nguy cơ mắc các bệnh tim mạch và rối loạn tâm thần.
- Gây tổn hại đến các mối quan hệ cá nhân.

2. Những cách giảm stress hiệu quả
- **Thở sâu:** Khi cảm thấy căng thẳng, hãy dành một vài phút để thở sâu. Hít vào qua mũi, giữ trong vài giây và thở ra từ từ qua miệng. Kỹ thuật này giúp làm dịu hệ thần kinh và giảm nhịp tim.
- **Vận động cơ thể:** Tham gia các hoạt động thể thao như đi bộ, chạy bộ, yoga hoặc bơi lội. Vận động không chỉ giúp cơ thể khỏe mạnh mà còn kích thích cơ thể sản sinh endorphins, chất làm giảm căng thẳng tự nhiên.
- **Nghe nhạc:** Những giai điệu nhẹ nhàng có thể giúp bạn thư giãn và giảm căng thẳng một cách nhanh chóng.
- **Thư giãn với sở thích cá nhân:** Vẽ tranh, đọc sách, làm vườn hay bất kỳ hoạt động nào bạn yêu thích đều có thể giúp bạn quên đi căng thẳng và tìm lại sự bình yên.

3. Xây dựng thói quen sống lành mạnh để chống stress
- **Lập kế hoạch:** Một lịch trình rõ ràng giúp bạn tránh cảm giác bị áp lực bởi quá nhiều công việc.
- **Ngủ đủ giấc:** Giấc ngủ chất lượng là cách tốt nhất để cơ thể và tâm trí bạn hồi phục sau một ngày dài.
- **Chế độ ăn uống lành mạnh:** Tránh caffeine và đường quá mức, thay vào đó hãy bổ sung nhiều rau củ quả và nước.
- **Kết nối với mọi người:** Dành thời gian nói chuyện với gia đình, bạn bè hoặc tìm sự hỗ trợ từ những người thân yêu khi cảm thấy quá tải.

4. Khi nào bạn cần sự giúp đỡ chuyên nghiệp?
Nếu stress kéo dài và gây ra các vấn đề nghiêm trọng như trầm cảm, lo âu hoặc mất ngủ liên tục, hãy tìm đến chuyên gia tâm lý. Họ có thể cung cấp cho bạn những chiến lược cụ thể và phù hợp với tình trạng của bạn.

5. Lời kết
Giảm stress không phải là một việc làm trong ngày một ngày hai mà cần sự nỗ lực liên tục. Hãy bắt đầu từ những bước nhỏ như thở sâu, vận động và chăm sóc giấc ngủ. Cuộc sống có thể đầy thử thách, nhưng với những biện pháp phù hợp, bạn hoàn toàn có thể vượt qua và sống một cuộc sống bình yên hơn.

Hãy luôn nhớ rằng, giảm stress không chỉ là một kỹ năng mà còn là món quà bạn trao tặng cho chính mình.`,
  link: '/articles/4'
},


{
  id: 5,
  title: 'Thư Giãn Tâm Hồn',
  description: 'Những phương pháp thư giãn tâm hồn giúp cải thiện tâm trạng và nâng cao chất lượng cuộc sống.',
  image: '/assets/images/articles/bai-viet-5.jpg',
  author: 'Hoàng Thanh H',
  createdAt: '2024-11-10',
  content: `Thư Giãn Tâm Hồn: Chìa Khóa Cải Thiện Tâm Trạng và Chất Lượng Cuộc Sống

Trong cuộc sống hối hả ngày nay, đôi khi chúng ta quên mất việc chăm sóc cho tâm hồn mình. Thư giãn tâm hồn không chỉ là một hình thức giải tỏa căng thẳng mà còn là cách để tái tạo năng lượng và tìm lại sự cân bằng trong cuộc sống. Hãy cùng tìm hiểu những phương pháp đơn giản nhưng đầy hiệu quả để thư giãn tâm hồn.

1. Tại sao cần thư giãn tâm hồn?
Tâm hồn là nơi chứa đựng những cảm xúc, suy nghĩ và hy vọng của mỗi người. Khi tâm hồn được chăm sóc, bạn sẽ cảm thấy bình yên, tự tin và tràn đầy năng lượng. Ngược lại, nếu không dành thời gian để thư giãn, bạn có thể dễ dàng rơi vào trạng thái căng thẳng, mất phương hướng hoặc cảm thấy bị quá tải.

Thư giãn tâm hồn giúp:
- Cải thiện tâm trạng và giảm stress.
- Tăng cường khả năng tập trung và sáng tạo.
- Thúc đẩy các mối quan hệ tích cực với người xung quanh.
- Mang lại sự hài lòng và cảm giác trọn vẹn trong cuộc sống.

2. Những phương pháp thư giãn tâm hồn hiệu quả
- **Nghe nhạc thư giãn:** Những bản nhạc không lời hoặc âm thanh thiên nhiên như tiếng suối chảy, tiếng mưa rơi có thể giúp bạn thả lỏng tâm trí và cảm thấy nhẹ nhàng hơn.
- **Tập thiền:** Thiền là một phương pháp hiệu quả để giảm căng thẳng và làm dịu tâm hồn. Chỉ cần dành 10-15 phút mỗi ngày để tập trung vào hơi thở, bạn sẽ cảm thấy tâm trí trở nên tĩnh lặng và cân bằng hơn.
- **Đọc sách:** Một cuốn sách hay không chỉ mang lại tri thức mà còn là liều thuốc tinh thần giúp bạn quên đi những lo lắng thường nhật.
- **Đi dạo trong thiên nhiên:** Dành thời gian đi bộ trong công viên, rừng cây hoặc bất kỳ nơi nào gần gũi với thiên nhiên sẽ giúp bạn cảm nhận được sự bình yên và kết nối với thế giới xung quanh.
- **Viết nhật ký:** Ghi lại những suy nghĩ và cảm xúc của mình là một cách để giải tỏa tâm trạng và hiểu rõ hơn về bản thân.

3. Tạo không gian thư giãn cho riêng mình
Để thư giãn tâm hồn hiệu quả, bạn cần một không gian riêng biệt, nơi bạn có thể thoải mái và tách biệt khỏi những ồn ào bên ngoài. Hãy thử:
- Trang trí không gian bằng cây xanh, nến thơm hoặc những món đồ bạn yêu thích.
- Tắt điện thoại hoặc các thiết bị điện tử để tránh bị gián đoạn.
- Tận hưởng thời gian ở một góc nhỏ mà bạn có thể gọi là "khoảng trời riêng".

4. Khi nào nên tìm sự giúp đỡ chuyên nghiệp?
Nếu bạn cảm thấy không thể thư giãn dù đã thử nhiều phương pháp, hoặc bạn thường xuyên cảm thấy lo âu, buồn bã trong thời gian dài, hãy tìm đến sự hỗ trợ từ các chuyên gia tâm lý. Đôi khi, sự giúp đỡ từ bên ngoài là điều cần thiết để bạn vượt qua những khó khăn.

5. Lời kết
Thư giãn tâm hồn không phải là điều xa xỉ mà là một nhu cầu cơ bản để sống hạnh phúc và trọn vẹn. Hãy dành thời gian mỗi ngày để chăm sóc tâm hồn của mình, dù chỉ là vài phút ngắn ngủi. Với những hành động nhỏ nhưng ý nghĩa, bạn sẽ thấy cuộc sống trở nên nhẹ nhàng và tích cực hơn.

Hãy bắt đầu hành trình thư giãn tâm hồn ngay hôm nay và cảm nhận sự thay đổi tích cực trong cuộc sống của bạn.`,
  link: '/articles/5'
},

{
  id: 6,
  title: 'Làm Thế Nào Để Đạt Được Hạnh Phúc',
  description: 'Những gợi ý đơn giản giúp bạn đạt được hạnh phúc và tìm kiếm sự vui vẻ trong cuộc sống.',
  image: '/assets/images/articles/bai-viet-6.jpg',
  author: 'Nguyễn Lan Phương',
  createdAt: '2024-11-05',
  content: `Làm Thế Nào Để Đạt Được Hạnh Phúc: Bí Quyết Sống Trọn Vẹn Mỗi Ngày

Hạnh phúc là điều mà ai cũng khao khát, nhưng không phải ai cũng biết cách đạt được. Trong nhịp sống hiện đại, hạnh phúc đôi khi trở thành một khái niệm xa vời, bị lẫn khuất giữa áp lực công việc, trách nhiệm gia đình, và những kỳ vọng từ xã hội. Tuy nhiên, hạnh phúc thực sự không phụ thuộc vào hoàn cảnh mà nằm ở cách bạn nhìn nhận và tận hưởng cuộc sống.

1. Hạnh phúc là gì?
Hạnh phúc không chỉ là cảm giác vui vẻ thoáng qua mà còn là trạng thái hài lòng sâu sắc với cuộc sống. Đó là sự cân bằng giữa sức khỏe thể chất, tinh thần, và các mối quan hệ xã hội. Mỗi người có một định nghĩa riêng về hạnh phúc, nhưng nó thường đến từ việc bạn sống đúng với giá trị và mong muốn của bản thân.

2. Làm thế nào để đạt được hạnh phúc?
- Biết ơn những điều nhỏ bé: Dành thời gian mỗi ngày để nghĩ về những điều bạn biết ơn, dù đó chỉ là một ngày nắng đẹp, một tách cà phê thơm ngon, hay một nụ cười từ người thân yêu.
- Tập trung vào hiện tại: Thay vì lo lắng về quá khứ hoặc tương lai, hãy tập trung vào những gì đang diễn ra xung quanh bạn. Mindfulness (chánh niệm) là một kỹ thuật hữu ích để sống trọn vẹn với hiện tại.
- Kết nối với mọi người: Dành thời gian cho gia đình, bạn bè và những người bạn yêu quý. Sự kết nối và cảm giác được yêu thương là yếu tố quan trọng mang lại hạnh phúc.
- Làm những điều bạn yêu thích:** Hãy theo đuổi những sở thích và đam mê cá nhân. Những hoạt động này không chỉ giúp bạn cảm thấy vui vẻ mà còn mang lại cảm giác ý nghĩa cho cuộc sống.

3. Tránh xa những điều gây tổn hại đến hạnh phúc
- So sánh bản thân với người khác: Mỗi người có một hành trình riêng. Việc so sánh chỉ làm bạn cảm thấy thất vọng và thiếu tự tin.
- Tích tụ cảm xúc tiêu cực: Hãy học cách tha thứ cho người khác và chính mình. Tha thứ không chỉ là hành động tốt đẹp mà còn giúp bạn giải thoát khỏi những cảm xúc tiêu cực.
- Quá tập trung vào vật chất: Tiền bạc và tài sản có thể mang lại tiện nghi, nhưng không phải là yếu tố cốt lõi tạo nên hạnh phúc. Hãy trân trọng những giá trị phi vật chất như tình yêu, sự tự do, và sự phát triển bản thân.

4. Hạnh phúc là một hành trình, không phải đích đến
Hạnh phúc không phải là điều bạn đạt được một lần rồi dừng lại. Đó là một quá trình liên tục, được xây dựng từ những hành động nhỏ hàng ngày. Hãy kiên nhẫn với bản thân và tập trung vào việc cải thiện từng khía cạnh trong cuộc sống.

5. Lời kết
Hạnh phúc không ở đâu xa, nó luôn hiện hữu trong những khoảnh khắc nhỏ nhặt nhất của cuộc sống. Hãy sống một cách đơn giản, yêu thương những người xung quanh, và dành thời gian để trân trọng chính mình. Mỗi ngày đều là một cơ hội mới để bạn tạo dựng hạnh phúc cho bản thân.

Hãy nhớ rằng, hạnh phúc không đến từ việc có tất cả mọi thứ, mà đến từ việc trân trọng những gì bạn đã có.`,
  link: '/articles/6'
},
{
  id: 7,
  title: 'Kỹ Năng Lắng Nghe',
  description: 'Phát triển kỹ năng lắng nghe để kết nối tốt hơn với người khác và hiểu rõ cảm xúc của chính mình.',
  image: '/assets/images/articles/bai-viet-7.jpg',
  author: 'Vũ Minh Hòa',
  createdAt: '2024-10-30',
  content: `Kỹ Năng Lắng Nghe: Cầu Nối Để Hiểu Biết và Kết Nối

Trong cuộc sống, giao tiếp là một phần không thể thiếu. Tuy nhiên, nhiều người thường chỉ chú trọng vào việc nói mà quên mất tầm quan trọng của việc lắng nghe. Lắng nghe không chỉ là việc nghe những gì người khác nói, mà còn là sự đồng cảm, thấu hiểu, và kết nối với người đối diện. Đây là một kỹ năng quan trọng giúp bạn xây dựng các mối quan hệ bền vững và sâu sắc hơn.

1. Lắng nghe là gì?
Lắng nghe không chỉ đơn thuần là nghe âm thanh. Lắng nghe thực sự là một quá trình chủ động, bao gồm việc chú ý, hiểu ý nghĩa của lời nói, và phản hồi phù hợp. Một người lắng nghe giỏi sẽ tạo cảm giác được tôn trọng và thấu hiểu cho người đối diện.

2. Tại sao kỹ năng lắng nghe lại quan trọng?
- Cải thiện mối quan hệ: Khi bạn lắng nghe một cách chân thành, người đối diện sẽ cảm thấy được tôn trọng và yêu thương, từ đó giúp cải thiện mối quan hệ.
- Giải quyết xung đột: Lắng nghe giúp bạn hiểu rõ hơn về vấn đề, từ đó đưa ra giải pháp hợp lý và giảm căng thẳng trong giao tiếp.
- ăng cường sự thấu hiểu: Khi lắng nghe, bạn không chỉ hiểu những gì người khác nói mà còn hiểu thêm về cảm xúc và nhu cầu của họ.

3. Làm thế nào để phát triển kỹ năng lắng nghe?
- Dành toàn bộ sự chú ý: Khi lắng nghe, hãy bỏ điện thoại xuống, nhìn vào mắt người nói và tập trung vào những gì họ đang chia sẻ.
- Không ngắt lời: Dù bạn có ý tưởng hoặc nhận xét ngay lập tức, hãy để người khác nói xong trước khi bạn phản hồi. Điều này cho thấy bạn tôn trọng họ.
- Phản hồi tích cực: Gật đầu, cười, hoặc nói những câu đơn giản như "Tôi hiểu", "Thật vậy sao?" để cho người đối diện biết rằng bạn đang lắng nghe.
- Hỏi lại khi cần:Nếu có điều gì không rõ, hãy hỏi lại để làm sáng tỏ và tránh hiểu lầm.
- Thấu cảm: Đặt mình vào vị trí của người nói để hiểu cảm giác và suy nghĩ của họ.

4. Những trở ngại thường gặp khi lắng nghe
- Tâm trí phân tán: Nhiều người thường khó tập trung vào câu chuyện của người khác do suy nghĩ hoặc lo lắng riêng.
- Định kiến cá nhân: Đôi khi, chúng ta có xu hướng đánh giá trước khi nghe hết câu chuyện, dẫn đến hiểu lầm.
- Chú trọng vào việc phản hồi: Quá tập trung vào việc mình sẽ nói gì tiếp theo có thể khiến bạn bỏ lỡ ý nghĩa của câu chuyện.

5. Lợi ích lâu dài của việc lắng nghe
Khi bạn phát triển kỹ năng lắng nghe, không chỉ các mối quan hệ cá nhân mà cả sự nghiệp của bạn cũng sẽ được cải thiện. Một nhà lãnh đạo giỏi là người biết lắng nghe ý kiến của nhân viên. Một người bạn tốt là người biết chia sẻ và cảm thông. Kỹ năng này cũng giúp bạn cải thiện khả năng tư duy, phân tích và giải quyết vấn đề.

6. Lời kết
Lắng nghe không phải là một kỹ năng bẩm sinh mà là điều bạn có thể rèn luyện mỗi ngày. Hãy bắt đầu từ những việc nhỏ như tập trung chú ý, không ngắt lời và thực sự đặt mình vào vị trí của người khác. Kỹ năng lắng nghe không chỉ là cách để hiểu người khác mà còn là cách để bạn thấu hiểu bản thân mình sâu sắc hơn.

Hãy nhớ rằng, lắng nghe không phải là một hành động đơn thuần, mà là nghệ thuật giúp bạn kết nối và xây dựng những mối quan hệ bền vững.`,
  link: '/articles/7'
},



{
  id: 8,
  title: 'Rèn Luyện Kỹ Năng Tự Nhận Thức',
  description: 'Hiểu rõ hơn về bản thân và từ đó nâng cao sự tự tin và động lực.',
  image: '/assets/images/articles/bai-viet-8.jpg',
  author: 'Đặng Thu Huyền',
  createdAt: '2024-10-25',
  content: `Rèn Luyện Kỹ Năng Tự Nhận Thức: Bước Đầu Tiên Để Hiểu Rõ Bản Thân

Tự nhận thức là khả năng hiểu rõ về chính mình, từ cảm xúc, suy nghĩ, đến hành động. Đây là một kỹ năng quan trọng giúp bạn điều chỉnh bản thân, đưa ra quyết định sáng suốt và xây dựng mối quan hệ tích cực với những người xung quanh. Tuy nhiên, tự nhận thức không phải là điều hiển nhiên mà cần được rèn luyện qua thời gian.

1. Tự nhận thức là gì?
Tự nhận thức là quá trình bạn nhận ra và hiểu rõ bản thân, bao gồm:
- Hiểu về cảm xúc: Nhận biết khi nào bạn vui, buồn, giận dữ hoặc lo lắng.
- Hiểu về hành vi: Xác định nguyên nhân và hậu quả của hành động của mình.
- Hiểu về giá trị và mục tiêu: Biết điều gì thực sự quan trọng với bạn và những mục tiêu bạn muốn đạt được.

2. Tại sao tự nhận thức quan trọng?
- Cải thiện khả năng kiểm soát cảm xúc: Khi bạn hiểu rõ cảm xúc của mình, bạn sẽ dễ dàng hơn trong việc điều chỉnh chúng.
- Tăng sự tự tin: Biết rõ điểm mạnh và điểm yếu của bản thân giúp bạn phát huy thế mạnh và cải thiện những khuyết điểm.
- Ra quyết định tốt hơn: Hiểu rõ giá trị và mục tiêu giúp bạn đưa ra những quyết định phù hợp với bản thân.
- Xây dựng mối quan hệ tốt hơn: Khi bạn hiểu rõ mình, bạn cũng sẽ dễ dàng thấu hiểu và đồng cảm với người khác.

3. Cách rèn luyện kỹ năng tự nhận thức
- Viết nhật ký: Ghi lại suy nghĩ, cảm xúc và những sự kiện quan trọng trong ngày. Điều này giúp bạn nhận ra các mẫu hành vi và cảm xúc lặp lại.
- Hỏi ý kiến từ người khác:Đôi khi, cách bạn nhìn nhận bản thân có thể không giống với cách người khác nhìn nhận bạn. Hãy hỏi ý kiến từ những người thân thiết để có góc nhìn đa chiều hơn.
- Tự hỏi bản thân: Hãy tự đặt câu hỏi như “Tại sao mình cảm thấy như vậy?”, “Hành động của mình có ý nghĩa gì?” để hiểu rõ hơn về các quyết định và cảm xúc.
- Thực hành mindfulness (chánh niệm): Chánh niệm giúp bạn tập trung vào hiện tại và nhận ra cảm xúc, suy nghĩ mà không phán xét.
- Đặt mục tiêu cụ thể: Xác định rõ ràng mục tiêu và những giá trị quan trọng trong cuộc sống. Từ đó, bạn có thể đánh giá xem hành động của mình có đang đi đúng hướng hay không.

4. Những trở ngại thường gặp khi rèn luyện tự nhận thức
- Thiếu thời gian: Cuộc sống bận rộn khiến nhiều người không dành đủ thời gian để suy ngẫm về bản thân.
- Sợ đối mặt với sự thật: Đôi khi, việc hiểu rõ điểm yếu hoặc sai lầm của mình có thể khiến bạn cảm thấy không thoải mái.
- Thiếu sự kiên nhẫn: Rèn luyện kỹ năng tự nhận thức là một quá trình dài hạn, đòi hỏi sự kiên trì và thực hành liên tục.

5. Lời khuyên để bắt đầu
Hãy bắt đầu từ những việc nhỏ như viết nhật ký hàng ngày, dành 5-10 phút mỗi tối để suy nghĩ về những gì đã xảy ra trong ngày, hoặc tham gia các khóa học chánh niệm. Hãy nhớ rằng, không ai có thể hiểu rõ bản thân bạn hơn chính bạn. Quá trình này không chỉ giúp bạn trở thành phiên bản tốt hơn của chính mình mà còn giúp bạn sống một cuộc đời ý nghĩa hơn.

6. Lời kết
Tự nhận thức là nền tảng của sự phát triển cá nhân và thành công trong cuộc sống. Hãy dành thời gian để hiểu rõ bản thân, chấp nhận con người mình và không ngừng học hỏi. Một khi bạn làm chủ được kỹ năng này, bạn sẽ thấy cuộc sống trở nên dễ dàng và đầy cảm hứng hơn.

Hãy bắt đầu hành trình rèn luyện tự nhận thức ngay hôm nay!`,
  link: '/articles/8'
},

{
  id: 9,
  title: 'Làm Thế Nào Để Đối Phó Với Khó Khăn',
  description: 'Những biện pháp giúp bạn đối phó với khó khăn một cách tích cực và hiệu quả.',
  image: '/assets/images/articles/bai-viet-9.jpg',
  author: 'Trần Bảo Long',
  createdAt: '2024-10-15',
  content: `Làm Thế Nào Để Đối Phó Với Khó Khăn: Biến Thách Thức Thành Cơ Hội

Cuộc sống luôn đầy rẫy những khó khăn và thử thách. Dù chúng ta có chuẩn bị kỹ càng đến đâu, vẫn sẽ có những lúc gặp phải những tình huống không như mong muốn. Tuy nhiên, điều quan trọng không phải là tránh né khó khăn, mà là cách chúng ta đối phó với chúng. Bài viết này sẽ cung cấp những gợi ý giúp bạn vượt qua khó khăn một cách tích cực và hiệu quả.

1. Chấp nhận thực tế
Bước đầu tiên để đối phó với khó khăn là chấp nhận rằng chúng đang xảy ra. Sự phủ nhận chỉ khiến vấn đề trở nên tồi tệ hơn. Khi bạn chấp nhận thực tế, bạn có thể bắt đầu tập trung vào việc tìm kiếm giải pháp thay vì chỉ lo lắng hoặc trách móc.

2. Giữ bình tĩnh
Cảm xúc tiêu cực như lo lắng, sợ hãi hoặc tức giận có thể che lấp khả năng suy nghĩ logic. Hãy dành vài phút để thở sâu, uống một ly nước hoặc đi dạo để làm dịu tâm trí. Khi bạn bình tĩnh hơn, bạn sẽ nhìn nhận vấn đề một cách rõ ràng hơn.

3. Phân tích vấn đề
Hãy chia nhỏ khó khăn thành những phần nhỏ hơn để dễ xử lý. Tự hỏi:
- Nguyên nhân của vấn đề là gì?
- Những yếu tố nào nằm trong tầm kiểm soát của bạn?
- Có những giải pháp nào khả thi?

Việc phân tích giúp bạn có cái nhìn tổng quan hơn và tìm ra cách tiếp cận hiệu quả.

4. Tìm kiếm sự hỗ trợ
Đừng ngần ngại chia sẻ khó khăn của mình với bạn bè, gia đình hoặc đồng nghiệp. Đôi khi, chỉ cần nói ra cũng giúp bạn cảm thấy nhẹ nhõm hơn. Ngoài ra, ý kiến từ người khác có thể mang lại những góc nhìn mới mẻ mà bạn chưa từng nghĩ đến.

5. Tập trung vào giải pháp
Thay vì chỉ tập trung vào vấn đề, hãy chuyển hướng sự chú ý của bạn sang các giải pháp. Hành động, dù nhỏ, cũng có thể giúp bạn tiến gần hơn đến việc giải quyết khó khăn và cảm thấy có động lực hơn.

6. Duy trì tư duy tích cực
Khó khăn là một phần của cuộc sống và thường mang lại bài học quý giá. Hãy xem mỗi thử thách như một cơ hội để học hỏi và trưởng thành. Thay vì nghĩ rằng “Tại sao lại là tôi?”, hãy tự hỏi “Tôi có thể học được gì từ tình huống này?”

7. Chăm sóc bản thân
Trong những thời điểm khó khăn, đừng quên chăm sóc sức khỏe tinh thần và thể chất của mình. Hãy ăn uống lành mạnh, tập thể dục và dành thời gian cho các hoạt động giúp bạn thư giãn, như thiền, đọc sách hoặc nghe nhạc.

8. Khi nào nên tìm đến chuyên gia?
Nếu bạn cảm thấy khó khăn vượt ngoài khả năng kiểm soát hoặc gây ảnh hưởng nghiêm trọng đến sức khỏe tinh thần của mình, đừng ngần ngại tìm đến các chuyên gia tâm lý. Sự hỗ trợ từ họ có thể giúp bạn tìm ra hướng đi đúng đắn và cảm thấy tự tin hơn.

9. Lời kết
Đối phó với khó khăn không phải là điều dễ dàng, nhưng nó là một phần quan trọng của cuộc sống. Những thử thách không chỉ giúp bạn hiểu rõ hơn về bản thân mà còn là cơ hội để bạn trưởng thành và mạnh mẽ hơn. Hãy nhớ rằng, mỗi khó khăn đều có giải pháp và bạn luôn có sức mạnh để vượt qua.

Hãy bắt đầu từ những bước nhỏ và tin rằng bạn có thể biến khó khăn thành cơ hội để thành công.`,
  link: '/articles/9'
}





  ];
  
  