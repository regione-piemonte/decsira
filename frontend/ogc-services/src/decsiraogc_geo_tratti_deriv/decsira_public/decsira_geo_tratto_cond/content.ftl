<table class="featureInfo">
  <caption class="featureInfo">Tratto condotta</caption>
  <#list features as feature>
    <tr>
          <th>Codice rilievo tratto</th>
	  <th>Codice rilievo condotta</th>
          <th>Denominazione condotta</th>
          <th>Stato condotta</th>
    </tr>
    <tr>
          <td>${feature.codice_rilievo_tratto.value}</td>
	   <td>${feature.codice_rilievo_condotta.value}</td>
          <td>${feature.denominazione_condotta.value}</td>
          <td>${feature.stato_condotta.value}</td>
    </tr>
  </#list>
</table>
