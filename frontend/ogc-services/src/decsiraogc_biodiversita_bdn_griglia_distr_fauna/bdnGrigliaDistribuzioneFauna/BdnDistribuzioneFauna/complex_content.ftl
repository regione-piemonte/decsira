<table class="featureInfo">
  <caption class="featureInfo">BDN - Distribuzione Specie Fauna Su Griglia 5 KM</caption>
  <#list features as feature>
    <tr>
      <th>Griglia 5 KM</th>
	  <th>Totale specie presenti</th>
	  <th>Totale osservazioni presenti</th>
	  <th>Anno osservazione piu' antica</th>
	  <th>Anno osservazione piu' recente</th>
	  <th>Presenza specie meritevoli di attenzione</th>
	  <th>Presenza specie protette legalmente</th>
    </tr>
    <tr>
      <td>${feature.idGriglia5Km.value}</td>
	  <td>${feature.numSpecieTotali.value}</td>
	  <td>${feature.numOsservazioniTotali.value}</td>
	  <td>${feature.annoOsservazAntica.value}</td>
	  <td>${feature.annoOsservazRecente.value}</td>
	  <td>${feature.flgSpecieMeritevolAttenz.value}</td>
	  <td>${feature.flgSpecieProtettLegal.value}</td>
    </tr>
  </#list>
</table>
