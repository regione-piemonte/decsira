<table class="featureInfo">
  <caption class="featureInfo">Punti di scarico industriale</caption>
  <#list features as feature>
    <tr>
      <th>Provincia</th>
	  <th>Comune</th>
	  <th>Tipo recettore</th>
	  <th>Denominazione recettore</th>
	  <th>Frequenza scarico</th>
	  <th>Volume annuo (m3)</th>
    </tr>
    <tr>
      <td>${feature.desProvincia.value}</td>
	  <td>${feature.desComune.value}</td>
	  <td>${feature.desTipoRecettore.value}</td>
	  <td>${feature.denominazioneRecettore.value}</td>
	  <td>${feature.desFrequenza.value}</td>
	  <td>${feature.volumeAnnuo.value}</td>
    </tr>
  </#list>
</table>