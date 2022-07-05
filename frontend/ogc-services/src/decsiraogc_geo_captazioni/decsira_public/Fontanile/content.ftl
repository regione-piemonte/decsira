<table class="featureInfo">
  <caption class="featureInfo">Fontanile</caption>
  <#list features as feature>
    <tr>
      <th>Codice rilievo</th>
	  <th>Codice ROC</th>
	  <th>Comune di localizzazione</th>
	  <th>Portata max  derivabile (l/s)</th>
	  <th>Portata Media  derivabile (l/s)</th>
    </tr>
    <tr>
      <td>${feature.codice_rilievo.value}</td>
	  <td>${feature.codice_roc.value}</td>
	  <td>${feature.comune.value}</td>
	  <td>${feature.portata_massima_derivabile.value}</td>
	  <td>${feature.portata_media_annua_derivabile.value}</td>
    </tr>
  </#list>
</table>
