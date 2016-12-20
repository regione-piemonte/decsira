package it.csi.frontend.iride.utils;

public class LogFormatter {
	
	/**
	   * @param className
	   *          Nome della classe
	   * @param methodName
	   *          Nome del metodo
	   * @param msg
	   *          Messaggio di testo
	   * @return Restituisce il testo formattato
	   */
	  public static String format(String className, String methodName, String msg) {
		StringBuffer sb = new StringBuffer();
		sb.append("[").append(className).append("::").append(methodName).append("] ").append(msg);
		return sb.toString();
	  }

}
