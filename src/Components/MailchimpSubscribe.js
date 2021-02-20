import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://pokemint.us1.list-manage.com/subscribe/post?u=e5a49d79c4e36f2ca9ff31b09&amp;id=64610c00df";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe class="MyForm" url={url} />;

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <form
          class="MyForm"
          onSubmitted={(formData) => subscribe(formData)}
          autoComplete="on"
        />
        {status === "sending" && <div className="sending-text">sending...</div>}
        {status === "error" && (
          <div
            className="error-text"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div className="success-text">Subscribed !</div>
        )}
      </div>
    )}
  />
);

export default SimpleForm;
