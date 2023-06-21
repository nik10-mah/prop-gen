import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";

export const ChatGpt = () => {
  const [promptText, setPromptText] = useState("");
  const [openAI, setOpenAI] = useState();
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPEN_API_KEY,
    });
    setOpenAI(new OpenAIApi(configuration));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setPromptText(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const completion = await openAI.createCompletion({
        model: "text-davinci-003",
        prompt: promptText,
        temperature: 0.6,
      });
      const resp = completion.data.choices[0].text;
      setResponse(resp);
    } catch (e) {
      setError(e.response.data.error.message);
    }
  };

  return (
    <Card className="w-100">
      <Card.Header className="bg-light">
        <h3>Chat Gpt</h3>
      </Card.Header>
      <Card.Body>
        <Form>
          {error && (
            <Alert variant="danger" onClose={() => setError("")} dismissible>
              {error}
            </Alert>
          )}
          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter a query</Form.Label>
            <Form.Control as="textarea" rows={8} onChange={handleChange} />
          </Form.Group>
        </Form>
        <Card.Text>{response}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white d-flex justify-content-end">
        <Button variant="primary" type="button" onClick={handleClick}>
          Generate
        </Button>
      </Card.Footer>
    </Card>
  );
};
