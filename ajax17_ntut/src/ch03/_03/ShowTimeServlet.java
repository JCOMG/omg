package ch03._03;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ch03/_03/ShowTime")
public class ShowTimeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter out = response.getWriter();
		SimpleDateFormat sdf = new SimpleDateFormat("台北時間: yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
        out.println(sdf.format(date));
        out.flush();
	}
}
