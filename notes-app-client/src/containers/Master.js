import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./Master.css";
import { s3Upload } from "../libs/awsLib";

export default class Master extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: null,
      master: null,
      description: ""
    };
  }

  async componentDidMount() {
    try {
      const master = await this.getMaster();
      const { description } = master;

      this.setState({ master, description });
    } catch (e) {
      alert(e);
    }
  }

  getMaster() {
    return API.get("masters", `/master/${this.props.match.params.id}`);
  }

  saveNote(note) {
    // return API.put("notes", `/notes/${this.props.match.params.id}`, {
    //   body: note
    // });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      //   await this.saveNote({
      //     content: this.state.content,
      //     attachment: attachment || this.state.note.attachment
      //   });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="Notes">
        {this.state.master && (
          <div>
            <h2>{this.state.master.name}</h2>
            <p>{this.state.master.description}</p>
          </div>
        )
        // <form onSubmit={this.handleSubmit}>
        //     <FormGroup controlId="content">
        //         <FormControl
        //             onChange={this.handleChange}
        //             value={this.state.content}
        //             componentClass="textarea"
        //         />
        //     </FormGroup>

        // </form>
        }
      </div>
    );

    // return {(
    //   <div className="Notes">
    //     <h2>{this.state.master.name}</h2>
    //     <p>{this.state.master.description}</p>
    //     {/* {this.state.note && ( (
    //       <form onSubmit={this.handleSubmit}>
    //         <FormGroup controlId="content">
    //           <FormControl
    //             onChange={this.handleChange}
    //             value={this.state.content}
    //             componentClass="textarea"
    //           />
    //         </FormGroup>

    //       </form>
    //     )} */}
    //   </div>
    // );
  }
}
