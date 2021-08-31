<table class="featureInfo">
  <caption class="featureInfo">Tratto di condotta generica</caption>
  <tr>
	  <th>Codice rilievo tratto</th>
	  <th>Codice rilievo condotta</th>
	  <th>Denominazione condotta</th>
	  <th>Stato condotta</th>
  </tr>
  <#list features as feature>
    <tr>
      <td>${feature.codice_rilievo_tratto.value}</td>
	  <td>${feature.codice_rilievo_condotta.value}</td>
	  <td>${feature.denominazione.value}</td>
	  <td>${feature.des_stato.value}</td>
    </tr>
  </#list>
</table>
