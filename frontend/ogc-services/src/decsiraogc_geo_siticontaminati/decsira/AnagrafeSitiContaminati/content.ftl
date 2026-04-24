<table class="featureInfo">
  <caption class="featureInfo">Anagrafe siti contaminati</caption>
  <#list features as feature>
    <tr>
      <th>Provincia</th>
	  <th>Comune</th>
	  <th>Codice regionale sito</th>
	  <th>Interventi</th>
          <th>Stato Procedimento</th>
    </tr>
    <tr>
      <td>${feature.provincia.value}</td>
	  <td>${feature.comune.value}</td>
	  <td>${feature.codice.value}</td>
	  <td>${feature.interventi.value}</td>
          <td>${feature.stato_procedimento.value}</td>
    </tr>
  </#list>
</table>

