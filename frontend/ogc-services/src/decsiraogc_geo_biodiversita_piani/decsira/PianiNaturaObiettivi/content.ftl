<table class="featureInfo">
  <caption class="featureInfo">Piani naturalistici: obiettivi</caption>
  <#list features as feature>
    <tr>
      <th>Destinazione</th>
	  <th>Interventi</th>
	  <th>Obiettivi</th>
	  <th>Tipo obiettivo</th>
	  <th>Tipo zona</th>
	  <th>Tipo piano</th>
	  <th>Numero legge</th>
	  <th>Data approvazione</th>
	  <th>Data fine</th>
	  <th>Nome area</th>
    </tr>
    <tr>
      <td>${feature.destinazione.value}</td>
	  <td>${feature.interventi.value}</td>
	  <td>${feature.obiettivi.value}</td>
	  <td>${feature.tipo_obiettivo.value}</td>
	  <td>${feature.desc_tipo_zona.value}</td>
	  <td>${feature.des_tipo_piano.value}</td>
	  <td>${feature.numero_legge.value}</td>
	  <td>${feature.data_approvazione.value}</td>
	  <td>${feature.data_fine.value}</td>
	  <td>${feature.nome_area.value}</td>
    </tr>
  </#list>
</table>
