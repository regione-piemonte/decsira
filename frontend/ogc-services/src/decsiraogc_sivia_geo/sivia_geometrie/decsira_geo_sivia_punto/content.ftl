<table class="featureInfo">
  <caption class="featureInfo">Valutazione Impatto Ambientale - Puntuali</caption>
  <tr>
	  <th>Codice Procedimento</th>
	  <th>Titolo Progetto</th>
	  <th>Tipo Procedura</th>
	  <th>Fase procedimento</th>
	  <th>Categoria progettuale</th>
  </tr>
  <#list features as feature>
    <tr>
      <td>${feature.codice_fase.value}</td>
	  <td>${feature.titolo_progetto.value}</td>
	  <td>${feature.desc_tipo_progetto.value}</td>
	  <td>${feature.des_fase_skvia.value}</td>
	  <td>${feature.lista_categorie.value}</td>
    </tr>
  </#list>
</table>
