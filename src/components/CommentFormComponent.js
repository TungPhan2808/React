import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentFormModalOpen: false,
    };
    this.toggleCommentModal = this.toggleCommentModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleCommentModal() {
    this.setState({
      isCommentFormModalOpen: !this.state.isCommentFormModalOpen,
    });
  }
  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }
  render() {
    return (
      <React.Fragment>
        <Button outline onClick={this.toggleCommentModal}>
          <span className="fa fa-pencil fa-lg"></span>Submit Comment
        </Button>
        <Modal
          isOpen={this.state.isCommentFormModalOpen}
          toggle={this.toggleCommentModal}
          style={{ marginTop: "200px" }}
        >
          <ModalHeader toggle={this.toggleCommentModal}>
            Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(value) => this.handleSubmit(value)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  <strong>Rating</strong>
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  {" "}
                  Your Name{" "}
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      minLength: (val) => val && val.length >= 3,
                      maxLength: (val) => !val || val.length <= 15,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: " Must be greater than 2 characters",
                      maxLength: " Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  <strong>Comment</strong>
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    name="comment"
                    className="form-control"
                    rows={6}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default CommentForm;
