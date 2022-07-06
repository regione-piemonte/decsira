<table class="featureInfo">
  <caption class="featureInfo">IREA 2010 -  Emissioni puntuali</caption>
  <#list features as feature>
    <tr>
      <th>Codice comune</th>
	  <th>Comune</th>
	  <th>Provincia</th>
	  <th>Anno inventario</th>
	  <th>Nome stabilimento</th>
	  <th>Indirizzo</th>
	  <th>Tipologia impianto</th>
	  <th>CH4 [t/a]</th>
	  <th>CO [t/a]</th>
	  <th>CO2 [kt/a]</th>
	  <th>N2O [t/a]</th>
	  <th>NH3 [t/a]</th>
	  <th>NMVOC [t/a]</th>
	  <th>NOX [t/a]</th>
	  <th>PM10 [t/a]</th>
	  <th>PM2.5 [t/a]</th>
	  <th>PTS [t/a]</th>
	  <th>SO2 [t/a]</th>
    </tr>
    <tr>
      <td>${feature.codice_comune.value}</td>
	  <td>${feature.comune.value}</td>
	  <td>${feature.provincia.value}</td>
	  <td>${feature.anno_inventario.value}</td>
	  <td>${feature.nome_stabilimento.value}</td>
	  <td>${feature.indirizzo.value}</td>
	  <td>${feature.tipo_stabilimento.value}</td>
	  <td>${feature.ch4.value}</td>
	  <td>${feature.co.value}</td>
	  <td>${feature.co2.value}</td>
	  <td>${feature.n2o.value}</td>
	  <td>${feature.nh3.value}</td>
	  <td>${feature.cov.value}</td>
	  <td>${feature.nox.value}</td>
	  <td>${feature.pm10.value}</td>
	  <td>${feature.pm2_5.value}</td>
	  <td>${feature.pts.value}</td>
	  <td>${feature.so2.value}</td>
    </tr>
  </#list>
</table>

