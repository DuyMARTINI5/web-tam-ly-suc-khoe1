import { Box, Button, FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';

import React from 'react';
import { mockTests } from '../utils/mockData';
import { useParams } from 'react-router-dom';

const TestDetail = () => {
  const { id } = useParams();
  const test = mockTests.find((t) => t.id === parseInt(id, 10));
  const [answers, setAnswers] = React.useState(new Array(test?.questions.length || 0).fill(null));
  const [score, setScore] = React.useState(null);
  const [evaluation, setEvaluation] = React.useState("");

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const calculatedScore = test.questions.reduce((total, question, index) => {
      const selectedOption = question.options.find((opt) => opt.label === answers[index]);
      return total + (selectedOption ? selectedOption.score : 0);
    }, 0);

    setScore(calculatedScore);
    evaluateScore(calculatedScore);
  };

  const evaluateScore = (score) => {
    const totalScore = test.questions.reduce((sum, question) => {
      const maxOptionScore = Math.max(...question.options.map((opt) => opt.score));
      return sum + maxOptionScore;
    }, 0);

    const percentage = (score / totalScore) * 100;

    if (percentage < 25) {
      setEvaluation("Tâm lý bình thường, không có dấu hiệu đáng lo ngại.");
    } else if (percentage >= 25 && percentage < 50) {
      setEvaluation("Có dấu hiệu tâm lý nhẹ, nên theo dõi thêm.");
    } else if (percentage >= 50 && percentage < 75) {
      setEvaluation("Dấu hiệu tâm lý trung bình, nên tham khảo ý kiến chuyên gia.");
    } else {
      setEvaluation("Dấu hiệu tâm lý nghiêm trọng, cần gặp chuyên gia tâm lý ngay lập tức.");
    }
  };

  if (!test) {
    return (
      <Box sx={{ padding: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="error" sx={{ marginBottom: 2 }}>Không tìm thấy bài test.</Typography>
        <Button variant="contained" color="primary" href="/tests">
          Quay lại danh sách bài test
        </Button>
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 4, margin: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>{test.title}</Typography>
      <Box sx={{ marginBottom: 3, textAlign: 'center', color: '#666' }}>
        <Typography>{test.description}</Typography>
      </Box>
      {test.questions.map((question, index) => (
        <Box key={index} sx={{ marginBottom: 4, padding: 2, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" gutterBottom>Câu {index + 1}: {question.text}</Typography>
          <RadioGroup
            value={answers[index] || ''}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          >
            {question.options.map((option, idx) => (
              <FormControlLabel key={idx} value={option.label} control={<Radio />} label={option.label} sx={{ marginY: 0.5 }} />
            ))}
          </RadioGroup>
        </Box>
      ))}
      {score === null ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ display: 'block', margin: '0 auto', paddingX: 4 }}
        >
          Nộp Bài
        </Button>
      ) : (
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="h5" color="primary">Điểm của bạn: {score}</Typography>
          <Typography variant="h6" sx={{ marginTop: 2, color: '#333' }}>{evaluation}</Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/tests"
            sx={{ marginTop: 3, paddingX: 4 }}
          >
            Quay lại danh sách bài test
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default TestDetail;
