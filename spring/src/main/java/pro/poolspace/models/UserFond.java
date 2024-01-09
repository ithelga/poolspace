package pro.poolspace.models;

import jakarta.persistence.*;


@Entity
@Table(name = "user_fond")
public class UserFond {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long user_id;

    private Long fond_id;

    private String status;

    private double rate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "rate_id")
    private Rate fondRate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fond_id")
    private Fond fond;

    public Rate getFondRate() {
        return fondRate;
    }

    public User getUser() {
        return user;
    }

    public Fond getFond() {
        return fond;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getFond_id() {
        return fond_id;
    }

    public void setFond_id(Long fond_id) {
        this.fond_id = fond_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }
}
