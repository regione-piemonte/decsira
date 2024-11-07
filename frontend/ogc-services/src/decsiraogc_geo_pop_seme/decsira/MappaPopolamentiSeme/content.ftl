<table class="featureInfo">
  <caption class="featureInfo">Mappa Risorse genetiche forestali</caption>
  <#list features as feature>
    <tr>
          <th>N. scheda</th>
          <th>Denominazione</th>
          <th>Tipo di materiale</th>
		  <th>Tipo popolamento</th>
		  <th>Referenti</th>
		  <th>Tipo di cenosi</th>
		  <th>Forma di Governo principale</th>
		  <th>Forma di Governo secondaria</th>
		  <th>Specie idonee alla raccolta</th>
		  <th>Totale superficie (ha)</th>
    </tr>
    <tr>
          <td>${feature.scheda.value}</td>
          <td>${feature.nomep.value}</td>
          <td>${feature.tipo_mater_descrizione.value}</td>
		  <td>${feature.tipopo_descrizione.value}</td>
		  <td>${feature.referenti.value}</td>
		  <td>${feature.tipoceno_descrizione.value}</td>
		  <td>${feature.formagov1_descrizione.value}</td>
		  <td>${feature.formagov2_descrizione.value}</td>
		  <td>${feature.specidonee.value}</td>
		  <td>${feature.tot_sup.value}</td>
    </tr>
  </#list>
</table>
