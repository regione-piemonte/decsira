<table class="featureInfo">
  <caption class="featureInfo">Alberi monumentali del Piemonte: dati del censimento</caption>
  <#list features as feature>
    <tr>
          <th>N. scheda</th>
          <th>Stato albero</th>
          <th>Tipo di oggetto</th>
          <th>Specie</th>
          <th>Eta' presunta del singolo albero </th>
		  <th>Circonferenza (cm)</th>
		  <th>Altezza misurata(m)</th>
		  <th>Diametro medio Chioma (m)</th>
		  <th>Decreto ministeriale di monumentalita'</th>
    </tr>
    <tr>
          <td>${feature.idNSschedaAlbero.value}</td>
          <td>${feature.descrStato.value}</td>
          <td>${feature.oggettoDiIdentif.value}</td>
          <td>${feature.specie.value}</td>
          <td>${feature.etaPresunta.value}</td>
		  <td>${feature.circonferenza.value}</td>
		  <td>${feature.altezzaMisurataMetri.value}</td>
		  <td>${feature.diametroMedioChiomaMetri.value}</td>
		  <td>${feature.urlDecretoMinistInserimento.value}</td>
    </tr>
  </#list>
</table>

