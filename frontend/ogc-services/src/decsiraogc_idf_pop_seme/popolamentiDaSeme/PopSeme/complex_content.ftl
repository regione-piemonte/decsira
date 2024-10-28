<table class="featureInfo">
  <caption class="featureInfo">Risorse genetiche forestali</caption>
  <#list features as feature>
    <tr>
          <th>N. scheda</th>
          <th>Denominazione</th>
          <th>Provincia</th>
          <th>Comuni</th>
          <th>Tipo materiale</th>
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
          <td>${feature.prov.value}</td>
          <td>${feature.comuni.value}</td>
          <td>${feature.tipoMaterDescr.value}</td>
		  <td>${feature.tipopoDescr.value}</td>
		  <td>${feature.referenti.value}</td>
		  <td>${feature.tipocenoDescr.value}</td>
		  <td>${feature.formagov1Descr.value}</td>
		  <td>${feature.formagov2Descr.value}</td>
		  <td>${feature.specidonee.value}</td>
		  <td>${feature.totSup.value}</td>
    </tr>
  </#list>
</table>

