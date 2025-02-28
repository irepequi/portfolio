
const Footer = () => {
  const email = "iperezquijada@gmail.com";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Correo copiado al portapapeles");
    });
  };

  return (
    <footer className="text-center py-4">
      <h2 className="text-2xl font-bold">Contáctame</h2>
      <p className="mt-2">
        Puedes enviarme un correo a{" "}
        <strong
          onClick={copyToClipboard}
          style={{ cursor: "pointer" }}
        >
          {email}
        </strong>
      </p>
    </footer>
  );
};

export default Footer;
