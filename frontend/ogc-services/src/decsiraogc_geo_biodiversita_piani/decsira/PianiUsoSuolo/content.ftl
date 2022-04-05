<table class="featureInfo">
  <caption class="featureInfo">Piani naturalistici e d'area: uso del suolo</caption>
  <#list features as feature>
    <tr>
      <th>Uso</th>
	  <th>Tipo piano</th>
	  <th>Numero legge</th>
	  <th>Data approvazione</th>
	  <th>Data fine</th>
	  <th>Nome area</th>
    </tr>
    <tr>
      <td>${feature.desc_uso_piano.value}</td>
	  <td>${feature.des_tipo_piano.value}</td>
	  <td>${feature.numero_legge.value}</td>
	  <td>${feature.data_approvazione.value}</td>
	  <td>${feature.data_fine.value}</td>
	  <td>${feature.nome_area.value}</td>
    </tr>
  </#list>
</table>
