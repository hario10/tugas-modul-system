class Table {
    constructor(hasil) {
      this.hasil = hasil;
    }
  
    createHeader(daftar) {
      let pembukaBody = "<thead><tr>";
      let penutupBody = "</tr></thead>";
      daftar.forEach((d) => {
        pembukaBody += `<th>${d}</th>`;
      });
  
      return pembukaBody + penutupBody;
    }
  
    createBody(daftar) {
      let pembukaBody = "<tbody>";
      let penutupBody = "</tbody>";
  
      daftar.forEach((d) => {
        pembukaBody += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
          </tr>
        `;
      });
  
      return pembukaBody + penutupBody;
    }
  
    send(unsur) {
      let table =
        "<table class='table table-hover table-dark'>" +
        this.createHeader(this.hasil.columns) +
        this.createBody(this.hasil.daftar) +
        "</table>";
      unsur.innerHTML = table;
    }
  }
  
  const table = new Table({
    columns: ["Name", "Email", "No Handphone"],
    daftar: [
      ["Hario Soedirman", "hariosoedirman77@gmail.com", "0852-7259-3213"],
      ["Luthfi Rafi", "luthfirafi95@gmail.com", "0813-5467-4352"],
      ["M. Rizki", "rizki12@gmail.com", "0898-4398-2323"]
     
    ]
  });
  
  export default table;