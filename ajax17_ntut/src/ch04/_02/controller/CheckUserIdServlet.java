package ch04._02.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import ch04._02.model.UserDAOMySQL;

@WebServlet("/ch04/_02/CheckUserIdServlet")
public class CheckUserIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String userId = request.getParameter("userId");
		response.setContentType("application/json; charset=UTF-8");
		PrintWriter out = response.getWriter();
		String custId = "";
		Gson gson = new Gson();
		Map<String, String> map = new HashMap<>();
		if (userId != null && userId.trim().length() != 0) {
			try {
		       UserDAOMySQL  dao = new UserDAOMySQL();
		       custId = dao.checkUserId(userId);
			   map.put("custId", custId);
			} catch(Exception ex){
				ex.printStackTrace();
			}
		}
		out.println(gson.toJson(map));
		out.close();
	}
}
