package pro.poolspace.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pro.poolspace.models.Fond;
//import pro.poolspace.models.Transaction;
import pro.poolspace.models.User;
//import pro.poolspace.repo.TransactionRepository;
import pro.poolspace.repo.UserRepository;

import java.util.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;
//    private final TransactionRepository transactionRepository;

//    @Autowired
//    public UserController(UserRepository userRepository, TransactionRepository transactionRepository) {
//        this.userRepository = userRepository;
//        this.transactionRepository = transactionRepository;
//    }

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/auth")
    public ResponseEntity<Map<String, Object>> auth(@RequestBody Map<String, String> requestData) {
        String login = requestData.get("login");
        String password = requestData.get("password");

        User user = userRepository.findByLogin(login);

        Map<String, Object> response = new HashMap<>();
        response.put("state", 0);

        if (user != null && user.getPassword().equals(password)) {

            String authToken = UUID.randomUUID().toString();
            user.setAuth_token(authToken);
            userRepository.save(user);

            response.put("user_id", user.getId());
            response.put("auth_token", user.getAuth_token());
            response.put("state", 1);
        }
        else response.put("state", 2);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

//    @PostMapping("/user")
//    public ResponseEntity<User> getUserById(@RequestBody Map<String, String> requestData) {
//        long id = Integer.parseInt(requestData.get("user_id"));
//        String token = requestData.get("auth_token");
//
//        User user = null;
//        Optional<User> optionalUser = userRepository.findById(id);
//
//        if (optionalUser.isPresent() && optionalUser.get().getAuth_token().equals(token)) {
//            user = optionalUser.get();
//        }
//
//        return new ResponseEntity<>(user, HttpStatus.OK);
//    }
//
//
//
//    @PostMapping("/user/transaction")
//    public ResponseEntity<Map<String, Object>> getPoolTransactionByUser(@RequestBody Map<String, String> data) {
//        List<Transaction> transactions = (List<Transaction>) transactionRepository.findByUserUserPoolId(1);
//        Map<String, Object> response = new HashMap<>();
//        response.put("state", 0);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
}


