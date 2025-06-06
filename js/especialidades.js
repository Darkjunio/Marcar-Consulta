function agendarConsulta(especialidade) {
    localStorage.setItem("especialidadeSelecionada", especialidade);
    window.location.href = "horarios.html";
}