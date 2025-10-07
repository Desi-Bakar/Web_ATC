import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attachment: null,
      "bot-field": "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAttachment = (e) => {
    const file = e.target.files[0];
    this.setState({ [e.target.name]: file });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(`Submission failed: ${error.message}`);
      });
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>File Upload</h1>

              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data" // ✅ fix: diperlukan untuk upload file
                onSubmit={this.handleSubmit}
              >
                {/* Required hidden field */}
                <input type="hidden" name="form-name" value="file-upload" />

                {/* Honeypot anti-spam */}
                <div hidden>
                  <label htmlFor="bot-field">
                    Don’t fill this out:{" "}
                    <input
                      id="bot-field"
                      name="bot-field"
                      onChange={this.handleChange}
                      aria-hidden="true"
                    />
                  </label>
                </div>

                {/* Name input */}
                <div className="field">
                  <label className="label" htmlFor="name">
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      id="name"
                      onChange={this.handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* File input */}
                <div className="field">
                  <div className="file">
                    <label className="file-label" htmlFor="attachment">
                      <input
                        className="file-input"
                        type="file"
                        name="attachment"
                        id="attachment"
                        onChange={this.handleAttachment}
                        aria-label="Choose a file to upload"
                      />
                      <span className="file-cta">
                        <span className="file-label">Choose a file…</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <div className="field">
                  <button
                    className="button is-link"
                    type="submit"
                    aria-label="Send file"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
