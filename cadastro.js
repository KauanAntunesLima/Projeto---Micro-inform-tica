document.getElementById('cep').addEventListener('blur', async () => {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  if (cep.length !== 8) return;

  const url = `https://viacep.com.br/ws/${cep}/json/`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.erro) {
      alert('CEP não encontrado!');
      return;
    }

    document.getElementById('endereco').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('estado').value = data.uf;
  } catch (error) {
    alert('Erro ao consultar o CEP.');
    console.error(error);
  }
});
