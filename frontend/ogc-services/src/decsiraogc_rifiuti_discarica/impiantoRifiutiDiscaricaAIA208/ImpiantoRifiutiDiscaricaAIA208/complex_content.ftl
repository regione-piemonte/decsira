<table class="featureInfo">
  <caption class="featureInfo">Impianti Gestione Rifiuti: Discariche (AIA o ex art. 208 D.Lgs. 152/2006)</caption>
  <#list features as feature>
    <tr>
	  <th>Comune</th>
	  <th>Provincia</th>
	  <th>Codice Sira</th>
	  <th>Categoria Discarica</th>
	  <th>Capacità totale (mc)</th>
	  <th>Capacità autorizzata (mc)</th>
    </tr>
    <tr>
	  <td>${feature.desComune.value}</td>
	  <td>${feature.desProvincia.value}</td>
	  <td>${feature.codiceSira.value}</td>
	  <td>${feature.categoriaDiscarica.value}</td>
	  <td>${feature.capacitaTotaleMc.value}</td>
	  <td>${feature.capacitaAutorizzataMc.value}</td>
    </tr>
  </#list>
</table>